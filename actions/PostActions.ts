"use server";

import Prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { success, z } from "zod";

const Blogschema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  bannerImage: z.string().min(1, { message: "Banner image is required" }),
});

export async function CreatePost(formData: FormData) {
  try {
    const validation = Blogschema.safeParse({
      title: formData.get("title"),
      description: formData.get("description"),
      content: formData.get("content"),
      bannerImage: formData.get("bannerImage"),
    });

    if (!validation.success) {
      return {
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const { title, description, content, bannerImage } = validation.data;
    await Prisma.post.create({
      data: {
        title,
        description,
        content: content.replace(/<(input|hr|br|img)([^>]*?)>(?!<\/\1>)/gi, "<$1$2/>"),
        bannerImage,
        slug: title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^a-z0-9-]/g, ""),
        published: true,
      },
    });

    console.log("Post created successfully");
    revalidatePath("/admin");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Create post error:", error);
    // Return the actual error for debugging
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function EditPost(formData: FormData) {
  try {
    const slug = formData.get("slug") as string;
    const validation = Blogschema.safeParse({
      title: formData.get("title"),
      description: formData.get("description"),
      content: formData.get("content"),
      bannerImage: formData.get("bannerImage"),
    });

    if (!validation.success) {
      return {
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const { title, description, content, bannerImage } = validation.data;

    await Prisma.post.update({
      where: { slug },
      data: {
        title,
        description,
        content: content.replace(/<(input|hr|br|img)([^>]*?)>(?!<\/\1>)/gi, "<$1$2/>"),
        bannerImage,
        slug: title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^a-z0-9-]/g, ""),
        published: true,
      },
    });
    console.log("Post updated successfully");
    revalidatePath("/admin");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Edit post error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function DeletePost(slug: string) {

  try {
    await Prisma.post.delete({
      where: {
        slug,
      },
    });
    console.log("Post deleted successfully");
    revalidatePath("/admin");
    return {
      success: true,
    };
  } catch (error) {
    console.error("Delete post error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }

  await Prisma.post.delete({
    where: {
      slug: slug,
    },
  });
  revalidatePath("/admin", "page");
}

export async function SearchPost(prevState: any, formData: FormData) {
  const query = formData.get("search") as string;

  const posts: any = await Prisma.post.findMany({
    where: {
      published: true,
      title: {
        contains: query.trim(),
        mode: "insensitive",
      },
    },
    select: {
      title: true,
      description: true,
      slug: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(posts);

  return {
    blogs: posts,
  };
}

export async function GetAllBlog() {
  const post = await Prisma.post.findMany()
  return{
    posts: post
  }
}

export async function GetBlogByTitle(slug: string) {
  // Slugify logic as in CreatePost
  

  const post = await Prisma.post.findUnique({
    where: { slug },
  });

  return post ;
}
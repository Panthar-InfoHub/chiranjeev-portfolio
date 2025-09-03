import React from "react";
import EditBlog from "@/components/blogs/EditBlog";
import Prisma from "@/prisma";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug;

  const post = await Prisma.post.findUnique({
    where: { slug: slug },
    select: {
      title: true,
      description: true,
      content: true,
    },
  });

  return (
    <div>
      <EditBlog 
        title={post?.title || ""}
        description={post?.description || ""}
        content={post?.content || ""}
        slug={slug || ""}
      />
    </div>
  );
}

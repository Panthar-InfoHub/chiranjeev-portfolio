"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { CreatePost, EditPost } from "@/actions/PostActions";
import RichTextEditor from "../text-editor";
import { toast } from "sonner";

const EditBlog = ({
  title,
  description,
  content,
  slug,
  bannerImage,
}: {
  title?: string;
  description?: string;
  content?: string;
  slug?: string;
  bannerImage?: string;
}) => {
  const [value, setValue] = useState<string>(content || "");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    // Prevent default form submission
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("content", value);
    formData.append("slug", slug || "");

    startTransition(async () => {
      try {
        // Submit the form
        const result = slug
          ? await EditPost(formData)
          : await CreatePost(formData);


        if (!result?.success) {
          console.log("Validation errors:", result?.message);
          // Handle errors here
          toast.error("Error submitting form");
          return;
        }

        // Reset form on success (only for new posts, not edits)
        if (!slug) {
          setValue("");
          // Reset other form fields
          const form = document.querySelector('form') as HTMLFormElement;
          if (form) {
            form.reset();
          }
        }

        router.push("/admin");
        router.refresh();
      } catch (error) {
        console.error("Error:", error);
      }
    });
  };



  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 pb-16 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-2 font-medium">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
        <Button disabled={isPending} type="submit">
          {isPending ? (
            <>
              {slug ? "Updating..." : "Publishing..."}
            </>
          ) : (
            <>{slug ? "Update" : "Publish"}</>
          )}
        </Button>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          {slug ? "Edit Blog Post" : "Create New Blog Post"}
        </h1>
        <p className="text-muted-foreground ">
          {slug
            ? "Fill out the form below to edit a blog post."
            : "Fill out the form below to create a new blog post."}
        </p>
      </div>
      <div className="grid gap-6 px-6">
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            defaultValue={title || ""}
            name="title"
            id="title"
            placeholder="Enter a title"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Input
            defaultValue={description || ""}
            name="description"
            id="description"
            placeholder="Enter a description"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bannerImage">Banner Image</Label>
          <Input
            type="url"
            placeholder="Enter image URL"
            defaultValue={bannerImage || ""}
            name="bannerImage"
            id="bannerImage"
            required
          />

        </div>
        <div className="grid gap-2">
          <Label htmlFor="content">Content</Label>
          <RichTextEditor
            content={value}
            editable
            onChange={(html) => setValue(html)}
          />
        </div>
      </div>
    </form>
  );
};

export default EditBlog;

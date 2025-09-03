"use client"
import React, { useTransition } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { DeletePost } from '@/actions/PostActions'
import { toast } from 'sonner'

const DeleteBlog = ({ slug, BtnText }: { slug: string, BtnText: string }) => {

    const [isPending, startTransition] = useTransition();

    const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        startTransition(async () => {
            const result = await DeletePost(slug);
            if (!result?.success) {
                toast.error(result?.message || "Error deleting post");
                return
            }
            toast.success("Post deleted successfully");
        });
    };

    return (
        <form
            onSubmit={handleDelete}
            className="w-full">
            <Input name="slug" type="hidden" value={slug} />

            <Button
                type="submit"
                size={"sm"}
                variant={"destructive"}
                className="w-full"
                disabled={isPending}
            >
                {isPending ? "Deleting..." : (BtnText || "Delete")}
            </Button>
        </form>
    )
}

export default DeleteBlog
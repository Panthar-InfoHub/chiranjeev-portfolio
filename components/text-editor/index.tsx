"use client";

import { EditorContent, useEditor, ReactNodeViewRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";
import MenuBar from "./menu-bar";
import { ImageView } from "./image-view";

interface RichTextEditorProps {
    content: string;
    onChange?: (content: string) => void;
    editable?: boolean;
}
export default function RichTextEditor({
    content,
    onChange,
    editable,
}: RichTextEditorProps) {
    const isEditable = editable ?? true;

    const editor = useEditor({
        editable: isEditable,
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc ml-3",
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal ml-3",
                    },
                },
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Highlight,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-blue-600 underline hover:text-blue-800 cursor-pointer transition-colors duration-200 font-medium",
                },
            }),
            Image.extend({
                addNodeView() {
                    return ReactNodeViewRenderer(ImageView)
                },
                addAttributes() {
                    return {
                        ...this.parent?.(),
                        width: {
                            default: null,
                        },
                        height: {
                            default: null,
                        },
                    }
                },
            }),
            Underline,
            HorizontalRule.configure({
                HTMLAttributes: {
                    class: "my-4 border-gray-300",
                },
            }),
            Blockquote.configure({
                HTMLAttributes: {
                    class: "border-l-4 border-gray-400 pl-4 italic my-4",
                },
            }),
        ],
        content: content,
        editorProps: {
            attributes: {
                class: isEditable
                    ? "min-h-[156px] border rounded-md bg-white py-4 px-6 prose focus:outline-none max-w-none "
                    : "",
            },
        },
        onUpdate: ({ editor }) => {
            // console.log(editor.getHTML());
            if (onChange) onChange(editor.getHTML());
        },
        
    });

    return (
        <div className="text-editor-container w-full">
            {isEditable && <MenuBar editor={editor} />}
            <div className="max-w-4xl mx-auto">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
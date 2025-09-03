import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  Underline,
  Image,
  Minus,
  Quote,
  Link,
} from "lucide-react";
import { Toggle } from "../ui/toggle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Editor } from "@tiptap/react";
import { useState } from "react";

export default function MenuBar({ editor }: { editor: Editor | null }) {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");

  if (!editor) {
    return null;
  }

  // Get current link URL when opening dialog
  const openLinkDialog = () => {
    const { href } = editor.getAttributes('link');
    if (href) {
      setLinkUrl(href);
    } else {
      setLinkUrl("");
    }
    setLinkText("");
    setIsLinkDialogOpen(true);
  };

  const addImage = () => {
    if (imageUrl.trim()) {
      editor
        .chain()
        .focus()
        .setImage({ 
          src: imageUrl.trim(),
          alt: "Inserted image",
          title: "Inserted image"
        })
        .run();
      setImageUrl("");
      setIsImageDialogOpen(false);
    }
  };

  const addLink = () => {
    if (linkUrl.trim()) {
      if (linkText.trim()) {
        // Insert new text with link
        editor
          .chain()
          .focus()
          .insertContent(`<a href="${linkUrl.trim()}">${linkText.trim()}</a>`)
          .run();
      } else {
        // Add link to selected text or update existing link
        editor
          .chain()
          .focus()
          .setLink({ href: linkUrl.trim() })
          .run();
      }
      setLinkUrl("");
      setLinkText("");
      setIsLinkDialogOpen(false);
    }
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
    setIsLinkDialogOpen(false);
  };

  const Options = [
    {
      icon: <Heading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      preesed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      preesed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive("bold"),
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive("italic"),
    },
    {
      icon: <Underline className="size-4" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      preesed: editor.isActive("underline"),
    },
    {   
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      preesed: editor.isActive("strike"),
    },
    {
      icon: <AlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      preesed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      preesed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      preesed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      preesed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      preesed: editor.isActive("orderedList"),
    },
    {
      icon: <Highlighter className="size-4" />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      preesed: editor.isActive("highlight"),
    },
    {
      icon: <Link className="size-4" />,
      onClick: openLinkDialog,
      preesed: editor.isActive("link"),
    },
    {
      icon: <Quote className="size-4" />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      preesed: editor.isActive("blockquote"),
    },
    {
      icon: <Minus className="size-4" />,
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
      preesed: false, // Horizontal rule doesn't have an active state
    },
  ];

  return (
    <div className="border rounded-md p-1 mb-1 sticky top-0 bg-slate-50 space-x-2 z-50">
      {Options.map((option, index) => (
        <Toggle
          key={index}
          pressed={option.preesed}
          onPressedChange={option.onClick}
        >
          {option.icon}
        </Toggle>
      ))}
      
      {/* Image Dialog */}
      <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
        <DialogTrigger asChild>
          <Toggle pressed={false}>
            <Image className="size-4" />
          </Toggle>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Image</DialogTitle>
            <DialogDescription>
              Enter the URL of the image you want to insert.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addImage();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsImageDialogOpen(false);
                setImageUrl("");
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={addImage}
              disabled={!imageUrl.trim()}
            >
              Add Image
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Link Dialog */}
      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editor.isActive("link") ? "Edit Link" : "Add Link"}
            </DialogTitle>
            <DialogDescription>
              {editor.isActive("link") ? 
                "Update the URL for this link." :
                editor.state.selection.empty ? 
                  "Enter both URL and text for the link." : 
                  "Enter the URL for the selected text."
              }
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="link-url">URL</Label>
              <Input
                id="link-url"
                type="url"
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addLink();
                  }
                }}
              />
            </div>
            {editor.state.selection.empty && !editor.isActive("link") && (
              <div className="space-y-2">
                <Label htmlFor="link-text">Link Text</Label>
                <Input
                  id="link-text"
                  type="text"
                  placeholder="Click here"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addLink();
                    }
                  }}
                />
              </div>
            )}
          </div>
          <DialogFooter>
            {editor.isActive("link") && (
              <Button
                type="button"
                variant="destructive"
                onClick={removeLink}
              >
                Remove Link
              </Button>
            )}
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsLinkDialogOpen(false);
                setLinkUrl("");
                setLinkText("");
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={addLink}
              disabled={!linkUrl.trim() || (editor.state.selection.empty && !editor.isActive("link") && !linkText.trim())}
            >
              {editor.isActive("link") ? "Update Link" : "Add Link"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
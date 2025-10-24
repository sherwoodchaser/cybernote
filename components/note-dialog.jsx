import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Pen } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Field, FieldLabel, FieldSeparator } from "@/components/ui/field";

function NoteDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="cursor-pointer">
          <Pen className="h-4 w-4" />
          <span>Add Note</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Note</DialogTitle>
          <DialogDescription>add a new note to your notes.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <form action="" className="flex-1 flex flex-col gap-5 mt-4">
            <FieldSeparator />
            <Field>
              <FieldLabel htmlFor="note-title">Note Title</FieldLabel>
              <Input id="note-title" placeholder="Enter note title" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="note-content">Note Content</FieldLabel>
              <Textarea
                id="note-content"
                placeholder="Write your note here..."
                className="resize-none"
              />
            </Field>
            <DialogFooter className="sm:justify-end mt-3 border-t pt-5">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="cursor-pointer"
                >
                  Close
                </Button>
              </DialogClose>
              <Button type="submit" className="cursor-pointer">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default NoteDialog;

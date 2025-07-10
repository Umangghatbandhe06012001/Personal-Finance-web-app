// components/ServerErrorModal.tsx
"use client";


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ServerErrorModal({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="text-center bg-[#303030] rounded-[15px]">
        <DialogHeader>
          <DialogTitle className="text-destructive">500 - Server Error</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Something went wrong on the server. Please try again later.
        </p>
      </DialogContent>
    </Dialog>
  );
}

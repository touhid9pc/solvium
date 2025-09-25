import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BaseModalProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  closeModal: () => void;
}

export function BaseModal({
  open,
  title,
  description,
  className,
  children,
  closeModal,
}: BaseModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          // This is effectively your "onClose"
          closeModal();
        }
      }}
    >
      <DialogContent
        className={cn(
          "bg-card text-card-foreground rounded-xl p-6 max-w-2xl",
          className
        )}
      >
        <DialogHeader className="flex items-center justify-between">
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
          <DialogClose asChild>
            {/* <button className="absolute right-4 top-4 rounded-full p-1 hover:bg-muted/20">
              <X className="h-5 w-5" />
            </button> */}
          </DialogClose>
        </DialogHeader>

        <div className="mt-4 overflow-auto">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

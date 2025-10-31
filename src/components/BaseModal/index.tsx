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
  titleStyle?: string;
}

export function BaseModal({
  open,
  title,
  description,
  className,
  children,
  closeModal,
  titleStyle,
}: BaseModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeModal();
      }}
    >
      <DialogContent
        className={cn(
          "bg-card text-card-foreground rounded-xl p-0 w-full max-w-lg max-h-[85dvh] flex flex-col",
          className
        )}
      >
        <div className="sticky top-0 z-10 bg-card px-6 py-4 flex items-center justify-between rounded-xl ">
          <div>
            {title && (
              <DialogTitle className={cn("text-lg font-semibold", titleStyle)}>
                {title}
              </DialogTitle>
            )}
            {description && (
              <DialogDescription className="text-sm text-muted-foreground">
                {description}
              </DialogDescription>
            )}
          </div>

          <DialogClose asChild>
            <button className="rounded-full p-1 hover:bg-muted/20 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </DialogClose>
        </div>

        <div className="overflow-y-auto px-6 py-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn(
          "w-full caption-bottom text-xs sm:text-sm md:text-base",
          className
        )}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0 text-xs sm:text-sm md:text-base",
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/5 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  );
}

// ✅ Custom interface for TableHead
export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  index?: number;
  totalColumns?: number;
}

export const TableHead: React.FC<TableHeadProps> = ({
  className,
  index,
  totalColumns,
  ...props
}) => {
  const alignment =
    index === 0
      ? "text-left"
      : index === totalColumns! - 1
      ? "text-right"
      : "text-center";

  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 align-middle font-medium whitespace-nowrap text-xs sm:text-sm md:text-base",
        alignment,
        className
      )}
      {...props}
    />
  );
};

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  index?: number;
  totalColumns?: number;
}

export const TableCell: React.FC<TableCellProps> = ({
  className,
  index,
  totalColumns,
  ...props
}) => {
  const alignment =
    index === 0
      ? "text-left"
      : index === totalColumns! - 1
      ? "text-right"
      : "text-center";

  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap text-xs sm:text-sm md:text-base",
        alignment,
        className
      )}
      {...props}
    />
  );
};

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "text-muted-foreground mt-4 text-xs sm:text-sm md:text-base",
        className
      )}
      {...props}
    />
  );
}

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableCaption };

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  title?: string;
  isBordered?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  title,
  isBordered = true,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className={`relative rounded-xl bg-card text-card-foreground shadow text ${className} p-6`}
    >
      {isBordered && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            border: "1px solid transparent",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
      )}
      {title && <h5 className="text-white text-xl font-bold mb-4">{title}</h5>}
      <Table>
        <TableHeader className="text-md md:text-xl">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                const total = headerGroup.headers.length;

                // Apply text-center only for headers between first and last
                const isMiddle = index > 0 && index < total - 1;

                return (
                  <TableHead
                    key={header.id}
                    className={cn(
                      isMiddle ? "text-center" : "text-left",
                      // optional: make last one right-aligned if you want
                      index === total - 1 && "text-right"
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-base md:text-md font-semibold">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const totalColumns = row.getVisibleCells().length; // ✅ calculate total once
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      index={index}
                      totalColumns={totalColumns}
                      className="py-6"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

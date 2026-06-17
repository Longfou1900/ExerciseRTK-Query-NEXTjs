"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/lib/ecommerce/product";

export const productColumns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imgUrl = row.getValue("image") as string;
      const title = row.getValue("title") as string;
      return (
        <div className="flex items-center">
          <img src={imgUrl || "/placeholder.svg"} //fallback no load image
           alt={title || "Product Image"} 
           className="h-12 w-12 rounded-lg ojbect-cover border bg-muted"/>
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Category
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "price",
    filterFn: (row, columnId, filterValue) => {
        return String(row.getValue(columnId)).includes(String(filterValue));
    },
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <span>${row.getValue<number>("price").toFixed(2)}</span>,
  },
];

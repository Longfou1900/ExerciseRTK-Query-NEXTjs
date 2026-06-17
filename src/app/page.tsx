"use client";

import * as React from "react";
// import { useGetAllProductQuery } from "../services/ecommerce";
import { ProductType } from "../lib/ecommerce/product";
import { productColumns } from "../components/products/columns";
import { DataTable } from "../components/products/data-table";
import { ProductModal } from "../components/products/product-modal";
import { useGetAllProductQuery } from "@/services/ecommerce";
// import { useGetAllProductQuery } from "@/services/ecommerce";
// import { DataTable } from "@/components/products/data-table";
// import { productColumns } from "@/components/products/columns";
// import { ProductModal } from "@/components/products/product-modal";
// import { ProductType } from "@/lib/ecommerce/product";

export default function Page() {
  const { data, isLoading, isError } = useGetAllProductQuery();
  const [selected, setSelected] = React.useState<ProductType | null>(null);
  const [open, setOpen] = React.useState(false);

  if (isLoading) return <p className="p-6">Loading products...</p>;
  if (isError || !data) return <p className="p-6 text-destructive">Failed to load products.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-4 text-2xl font-semibold">Products</h1>
      <DataTable
        columns={productColumns}
        data={data}
        onRowClick={(product) => {
          setSelected(product);
          setOpen(true);
        }}
      />
      <ProductModal
        productId={selected?.id ?? null}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}
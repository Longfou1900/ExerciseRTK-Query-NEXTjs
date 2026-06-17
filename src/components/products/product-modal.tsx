"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { useGetSingleProductQuery } from "@/services/ecommerce";

interface ProductModalProps {
  productId: number | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductModal({ productId, open, onOpenChange }: ProductModalProps) {
  const { data, isLoading, isError } = useGetSingleProductQuery(productId ?? 0, {
    skip: !open || productId === null,
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
        </DialogHeader>

        {isLoading && <p className="text-sm text-muted-foreground">Loading...</p>}
        {isError && <p className="text-sm text-destructive">Failed to load product.</p>}

        {data && (
          <div className="space-y-3">
            <img src={data.image} alt={data.title} className="h-40 w-full object-contain" />
            <h3 className="font-semibold">{data.title}</h3>
            <p className="text-sm text-muted-foreground">{data.category}</p>
            <p className="font-medium">${data.price.toFixed(2)}</p>
            <p className="text-sm">{data.description}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
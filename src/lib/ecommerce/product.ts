import React from 'react'

export interface Rating{
    rate: number;
    count: number;
}
export interface ProductType {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    category: string;
    rating: Rating;
}

// export interface ProductResponse{
//     content: ProductType[]
// }
export type ProductResponse = ProductType[];
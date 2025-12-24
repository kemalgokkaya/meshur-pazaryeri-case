'use client';
import { memo } from 'react';
import Image from 'next/image';
import { Button } from "../atoms/Button";
import { useStore } from "@/src/store/useStore";

export const ProductCard = memo(({ product }: any) => {
    const { toggleFavorite, favorites } = useStore();
    const isFav = favorites.some(p => p.id === product.id);

    return (
        <div className="border p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800 flex flex-col items-center">
            {/* next/image kullanarak performansı artırdık */}
            <div className="relative w-full h-40 mb-2">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <h2 className="font-bold text-lg text-black dark:text-white">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{product.price} TL</p>
            <Button onClick={() => toggleFavorite(product)} active={isFav}>
                {isFav ? "Favoriden Çıkar" : "Favoriye Ekle"}
            </Button>
        </div>
    );
});

ProductCard.displayName = "ProductCard";
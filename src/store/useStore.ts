import { create } from 'zustand';
import { Product } from '../types';

interface Store {
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
}

export const useStore = create<Store>((set) => ({
    favorites: [],
    toggleFavorite: (product) => set((state) => {
        const isFav = state.favorites.find(p => p.id === product.id);
        if (isFav) {
            return { favorites: state.favorites.filter(p => p.id !== product.id) };
        }
        return { favorites: [...state.favorites, product] };
    }),
}));
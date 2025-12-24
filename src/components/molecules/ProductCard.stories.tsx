import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
    title: 'Molecules/ProductCard',
    component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
    args: {
        product: {
            id: "1",
            name: "Örnek Ürün",
            price: 100,
            image: "https://picsum.photos/200",
            description: "Bu bir Storybook testidir."
        },
    },
};
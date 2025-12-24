export const mapProductResponse = (data: any) => {
    return data.map((item: any) => ({
        id: item.id.toString(),
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description || "Harika bir yöresel lezzet."
    }));
};
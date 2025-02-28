interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  type ProductSummary = Pick<Product, "id" | "name" | "price">;
  const product: ProductSummary = { id: 1, name: "Laptop", price: 999.99 };
console.log(product); 
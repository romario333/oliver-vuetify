export interface Product {
  id: string;
  name: string;
}

export function useProducts() {
  async function fetchProducts(): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return [
      { id: "1", name: "Product 1" },
      { id: "2", name: "Product 2" },
      { id: "3", name: "Product 3" },
      { id: "4", name: "Product 4" },
      { id: "5", name: "Product 5" },
      { id: "6", name: "Product 6" },
      { id: "7", name: "Product 7" },
      { id: "8", name: "Product 8" },
      { id: "9", name: "Product 9" },
      { id: "10", name: "Product 10" },
    ];
  }

  return {
    fetchProducts,
  };
}

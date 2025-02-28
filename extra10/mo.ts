interface Pro {
    _i: string;
    name: string;
    price: number;
    stock: number;
    category: string;
}

async function findProductById(id: string): Promise<Pro | null> {
    
    const products: Pro[] = [
        { _i: "1", name: "Laptop", price: 1000, stock: 50, category: "Electronics" },
        { _i: "2", name: "Chair", price: 100, stock: 200, category: "Furniture" },
        { _i: "3", name: "Pen", price: 2, stock: 1000, category: "Stationery" }
    ];

   
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(p => p._i === id);
            resolve(product || null);
        }, 1000);
    });
}

async function testFindProductById() {
    try {
        const product = await findProductById("1");
        if (product) {
            console.log(`Product found: ${product.name}, Price: $${product.price}`);
        } else {
            console.log("Product not found");
        }
    } catch (error) {
        console.error("Error retrieving product:", error);
    }
}

testFindProductById();
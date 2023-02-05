class ProductsService {
  async getAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Could not fetch MQTT config");
    }

    return data;
  }

  async getAllCategories() {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Could not fetch MQTT config");
    }

    return data;
  }

  async getProductsFromCategory(category) {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Could not fetch MQTT config");
    }

    return data;
  }
}

export default new ProductsService();

import { decorate, observable } from "mobx";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  fetchProducts = async () => {
    try {
      const response = await instance.get("/cookies"); // because i was using laila's BE
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ProductStore ->fetchProduct ->error", error);
    }
  };

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);
}

decorate(ProductStore, {
  products: observable,
  loading: observable,
});

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;

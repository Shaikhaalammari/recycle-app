import { decorate, observable } from "mobx";
import instance from "./instance";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendors = async () => {
    try {
      const response = await instance.get("/bakeries");
      this.vendors = response.data;
      console.log(response.data);
      this.loading = false;
    } catch (error) {
      console.error("VendorStore ->fetchProduct ->error", error);
    }
  };
}

decorate(VendorStore, {
  products: observable,
  vendors: observable,
  loading: observable,
});

const vendorStore = new VendorStore();
vendorStore.fetchVendors();
export default vendorStore;

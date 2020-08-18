import { decorate, observable, computed } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
  items = [
    {
      productId: 1,
      quantity: 5,
    },
    {
      productId: 2,
      quantity: 3,
    },
  ];
  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.productId === newItem.productId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    //etha elitem mawjod belcart just added to the one in cart , dont add new row of items
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
    //this to save what i have in cart
  };
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.productId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
}

decorate(CartStore, {
  items: observable,
  totalQuantity: computed, // computed y3ne the value depends on store property which this.items ,
});

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;

import firebase from "../config/firebase";

export const getShoppingItems = async () => {
    const itemsRef = firebase.database().ref("items");
    const snapshot = await itemsRef.once("value");
    return snapshot.val();
}

export const postOrder = (cart, total, clientInfo) => {
    const rootRef = firebase.database().ref("/order");
      const items = Object.keys(cart).map(itemId => ({itemId, count: cart[itemId].count}))
      const order = {
          items,
          clientInfo,
          price: total,
      }
      rootRef.set(order);
}
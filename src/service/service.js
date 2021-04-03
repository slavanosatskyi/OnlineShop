import firebase from "../config/firebase";

export const getShoppingItems = async () => {
    const itemsRef = firebase.database().ref("items");
    const snapshot = await itemsRef.once("value");
    return snapshot.val();
}

export const postOrder = (order, userDetails) => {
    
}
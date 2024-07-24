
import Product from "../../components/Product";
import { addItem, decreaseItem, deleteItem, increaseItem } from "../../redux/CartSlice";
import { AppDispatch } from "../../store";

export function handleAddCart (e: React.MouseEvent,product: Product, dispatch:AppDispatch) {
    e.preventDefault()
    const newItem = {
      id: product.id,
      name: product.name,
      quantity: 1,
      src:product.src,
      price: product.price,
      totalPrice: product.price * 1,
    };
    dispatch(addItem(newItem));
    alert('Added to cart')
    
  };

  export function handleIncreaseItem (dispatch: AppDispatch, cartItemId: number)  {
    dispatch(increaseItem(cartItemId));
  };
  
  export function handleDecreaseItem  (dispatch: AppDispatch, cartItemId: number) {
    dispatch(decreaseItem(cartItemId));
  };

  export const handleDeleteItem = (dispatch: AppDispatch, cartItemId: number) => {
    dispatch(deleteItem(cartItemId));
  };
  
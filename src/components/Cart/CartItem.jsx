import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../store/cartSlice";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
    toast.info(`Increased quantity of ${item.name}`);
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
    toast.info(`Decreased quantity of ${item.name}`);
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.warn(`${item.name} removed from cart`);
  };

  return (
    <div className="flex justify-between items-center border p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">₹{item.price}</p>
          <div className="flex gap-2 mt-1">
            <button onClick={handleDecrease} className="px-2 bg-gray-200 rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={handleIncrease} className="px-2 bg-gray-200 rounded">+</button>
          </div>
        </div>
      </div>
     <div className="px-3 py-1">
       <button onClick={handleRemove}>
         <FontAwesomeIcon className="text-black cursor-pointer" icon={faTrash} />
      </button>
     </div>
    </div>
    
  );
};

export default CartItem;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalPrice, removeFromCart } from './cartSlice';
import { toast } from 'react-toastify';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b pb-4 mb-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4 rounded-lg shadow-sm" />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                  <p className="text-gray-700">${item.price} x {item.quantity}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="border-t pt-6 mt-4 flex justify-between items-center">
            <p className="font-semibold text-xl text-gray-700">Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
            <p className="font-bold text-2xl text-blue-600">Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItems } from './cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const inCart = cartItems.some(item => item.id === product.id);

  const handleCart = () => {
    if (inCart) {
      dispatch(removeFromCart(product.id));
      toast.error('Product removed from cart');
    } else {
      dispatch(addToCart(product));
      toast.success('Product added to cart');
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-white">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4 rounded-lg" />
      <h3 className="font-semibold text-lg text-gray-800">{product.title}</h3>
      <p className="text-gray-600 text-sm truncate mb-2">{product.description}</p>
      <p className="text-blue-600 font-bold text-lg mb-4">${product.price}</p>
      <button
        onClick={handleCart}
        className={`w-full py-2 mt-2 rounded-md text-white transition-all 
          ${inCart ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}
        `}
      >
        {inCart ? 'Remove From Cart' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default ProductCard;

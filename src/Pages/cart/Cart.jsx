import { useCart } from "../../context/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500">Start adding items to your cart.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20 mb-15">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center"
        >
          <FaTrash className="mr-2" /> Clear Cart
        </button>
      </div>

      <div className="divide-y">
        {items.map((item) => (
          <div key={item._id} className="py-4 flex items-center">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
              <img
                src={
                  item.image_url ||
                  "https://tse1.mm.bing.net/th?id=OIP.lYiEUEqLjXB3Hi32BLl0ZQHaHC&pid=Api"
                }
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="ml-4 flex-1">
              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.sub_category.name}</p>
              <div className="flex items-center mt-2">
                <p className="text-lg font-semibold text-blue-600">
                  ₹{item.price}
                </p>
                <div className="ml-6 flex items-center border rounded-md px-2 py-1">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        Math.max(1, (item.quantity || 1) - 1)
                      )
                    }
                    className="text-gray-600 p-1 cursor-pointer hover:text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="mx-4 text-base font-medium w-6 text-center">
                    {item.quantity || 1}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item._id, (item.quantity || 1) + 1)
                    }
                    className="text-gray-600 p-1 cursor-pointer hover:text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
                <p className="ml-4 text-base font-medium text-gray-900">
                  Total: ₹
                  {(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item._id)}
              className="ml-6 text-red-500 hover:text-red-700 text-lg"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-xl font-semibold text-gray-900">
          <p>Subtotal</p>
          <p>₹{total}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <button
            onClick={() => navigate("/checkout")}
            className="w-full cursor-pointer bg-blue-600 border border-transparent rounded-lg py-3 px-8 text-lg font-medium text-white hover:bg-blue-700 focus:outline-none transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartContent = ({ onNext }) => {
  const { items, updateQuantity, removeFromCart } = useCart();

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[₹$,]/g, ""));
  };

  const formatPrice = (price) => {
    // Check if price already has a currency symbol
    if (
      typeof price === "string" &&
      (price.includes("₹") || price.includes("$"))
    ) {
      return price;
    }
    return `₹${price}`;
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const calculateItemTotal = (item) => {
    const price = parsePrice(item.price);
    return (price * item.quantity).toFixed(2);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
          Your Cart
        </h2>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-6">
              Add items to your cart to continue shopping
            </p>
            <Link
              to="/"
              className="px-8 py-3 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="relative w-full md:w-32 h-32 rounded-lg overflow-hidden">
                    <img
                      src={
                        item.image_url ||
                        "https://images.meebuddy.com/products/no_image.jpg"
                      }
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden">
                        <button
                          className="w-10 h-10 cursor-pointer flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors"
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity - 1)
                          }
                        >
                          <span className="text-xl text-gray-600">−</span>
                        </button>
                        <span className="w-12 h-10 flex items-center justify-center border-x bg-white">
                          {item.quantity}
                        </span>
                        <button
                          className="w-10 h-10 cursor-pointer flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors"
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity + 1)
                          }
                        >
                          <span className="text-xl text-gray-600">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 min-w-[120px]">
                    <p className="text-lg font-bold text-gray-800">
                      {formatPrice(calculateItemTotal(item))}
                    </p>
                    <button
                      className="text-sm text-red-500 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t">
              <button className="w-full cursor-pointer sm:w-auto text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-2 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform transition-transform group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Continue Shopping
              </button>
              <button
                onClick={onNext}
                className="w-full cursor-pointer sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2"
              >
                Proceed to Address
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartContent;

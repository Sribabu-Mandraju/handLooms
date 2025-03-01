import { useCart } from "../../context/CartContext";

const OrderSummary = ({
  step,
  deliveryCharge = 10,
  promoApplied,
  discount = 0,
}) => {
  const { total, items = [], clearCart } = useCart();
  const finalTotal = total + deliveryCharge - discount;

  const handlePlaceOrder = async () => {
    try {
      // Here you would typically make an API call to place the order
      // For now, we'll just show a success message and clear the cart
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      alert("Order placed successfully!");
      clearCart();
      // You might want to redirect to an order confirmation page here
    } catch (error) {
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl sticky top-4">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          ORDER SUMMARY
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-gray-700">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
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
              Items ({items.length || 0})
            </span>
            <span className="font-medium">₹{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-gray-700">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Delivery Charges
            </span>
            <span className="text-blue-600 font-medium">
              + ₹{deliveryCharge.toFixed(2)}
            </span>
          </div>
          {promoApplied && (
            <div className="flex justify-between items-center text-green-600">
              <span className="flex items-center gap-2">
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
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                Discount
              </span>
              <span className="font-medium">- ₹{discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between items-center pt-4 border-t font-bold text-lg">
            <span className="text-gray-800">Total</span>
            <span className="text-blue-700">₹{finalTotal.toFixed(2)}</span>
          </div>
        </div>

        {step === 3 && (
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg mt-6 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2 shadow-lg"
            onClick={handlePlaceOrder}
          >
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            PLACE ORDER
          </button>
        )}

        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>100% Secure Payments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

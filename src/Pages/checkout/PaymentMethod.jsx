import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const PaymentMethod = ({ onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);
  const navigate = useNavigate();
  const { items, clearCart } = useCart();

  useEffect(() => {
    if (!items || items.length === 0) {
      navigate("/cart");
    }
  }, [items, navigate]);

  const generateOrderId = () => {
    return "ORD" + Date.now().toString().slice(-8);
  };

  const handlePaymentMethodSelect = (method) => {
    if (method === "cod") {
      setSelectedMethod("cod");
    } else {
      setShowUnavailableModal(true);
    }
  };

  const handlePlaceOrder = () => {
    if (!selectedMethod) {
      alert("Please select a payment method");
      return;
    }

    if (!items || items.length === 0) {
      navigate("/cart");
      return;
    }

    const orderId = generateOrderId();
    const order = {
      id: orderId,
      date: new Date().toISOString(),
      status: "Order Placed",
      items: items,
      total: JSON.parse(localStorage.getItem("cartTotal") || "0"),
      paymentMethod: selectedMethod,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    clearCart();
    setShowModal(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-4">
          Select Payment Method
        </h2>

        <div className="space-y-4">
          <div
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
              selectedMethod === "cod"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-200"
            }`}
            onClick={() => handlePaymentMethodSelect("cod")}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                checked={selectedMethod === "cod"}
                onChange={() => {}}
                className="w-5 h-5 text-blue-600"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Pay on Delivery</h3>
                <p className="text-sm text-gray-600">
                  Pay with cash upon delivery
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-4 border border-gray-200 rounded-lg cursor-pointer opacity-50"
            onClick={() => handlePaymentMethodSelect("online")}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                disabled
                className="w-5 h-5 text-gray-400"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Online Payment</h3>
                <p className="text-sm text-gray-600">
                  Pay with Razorpay or PayPal (Coming Soon)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-2 text-gray-600 hover:text-gray-800"
          >
            Back
          </button>
          <button
            onClick={handlePlaceOrder}
            disabled={!selectedMethod}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedMethod
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                Order Placed Successfully!
              </h3>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Your Order ID:</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {generateOrderId()}
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generateOrderId());
                    alert("Order ID copied to clipboard!");
                  }}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Copy Order ID
                </button>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Go to Home
              </button>
              <button
                onClick={() => navigate("/track-order")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Track Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unavailable Payment Modal */}
      {showUnavailableModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                Payment Method Unavailable
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Online payment methods (Razorpay and PayPal) will be available
                soon. Please use Pay on Delivery for now.
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowUnavailableModal(false)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;

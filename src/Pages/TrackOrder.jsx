import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      setError("Please enter an order ID");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const foundOrder = orders.find((o) => o.id === orderId);

    if (foundOrder) {
      setOrder(foundOrder);
      setError("");
    } else {
      setOrder(null);
      setError("Order not found. Please check your order ID and try again.");
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "order placed":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-4xl min-h-[65vh] flex items-center justify-center mx-auto p-4 mt-8 md:p-6">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg border border-gray-100 my-20 overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Track Your Order
          </h1>

          {/* Order ID Input */}
          <div className="mb-8">
            <label
              htmlFor="orderId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Order ID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleTrackOrder}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Track Order
              </button>
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          {/* Order Details */}
          {order && (
            <div className="space-y-6">
              {/* Order Status */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Order Status
                </h2>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    Order placed on {new Date(order.date).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Order Items
                </h2>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/300";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm text-gray-600">₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Shipping Address
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-800">{order.address.fullName}</p>
                  <p className="text-gray-600">{order.address.addressLine1}</p>
                  {order.address.addressLine2 && (
                    <p className="text-gray-600">
                      {order.address.addressLine2}
                    </p>
                  )}
                  <p className="text-gray-600">
                    {order.address.city}, {order.address.postalCode}
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{order.total}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Payment Method</span>
                    <span className="capitalize">
                      {order.paymentMethod === "cod"
                        ? "Cash On Delivery"
                        : order.paymentMethod}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-gray-800">
                      <span>Total</span>
                      <span>₹{order.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;

import { useCart } from "../../context/CartContext";

const DeliveryContent = ({
  selectedPayment,
  setSelectedPayment,
  deliveryTime,
  setDeliveryTime,
  instructions,
  setInstructions,
  promoCode,
  setPromoCode,
  applyPromoCode,
  promoApplied,
  onBack,
  total,
}) => {
  const { items } = useCart();
  const walletBalance = 104; // This should come from a user context or API

  const deliveryTimes = [
    { id: "morning", label: "Morning (9:00 AM - 12:00 PM)" },
    { id: "afternoon", label: "Afternoon (12:00 PM - 3:00 PM)" },
    { id: "evening", label: "Evening (3:00 PM - 6:00 PM)" },
    { id: "night", label: "Night (6:00 PM - 9:00 PM)" },
  ];

  const isWalletSufficient = walletBalance >= total;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-3">
        Payment & Delivery Options
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Payment Method</h3>
          <div className="space-y-3">
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedPayment === "online"
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-gray-400"
              }`}
              onClick={() => setSelectedPayment("online")}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={selectedPayment === "online"}
                  onChange={() => setSelectedPayment("online")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <span className="font-medium text-gray-800">
                    Online Payment
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    Credit/Debit Card, Net Banking, UPI (including 3% Tax)
                  </p>
                </div>
              </label>
            </div>

            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                !isWalletSufficient
                  ? "opacity-50 cursor-not-allowed"
                  : selectedPayment === "wallet"
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-gray-400"
              }`}
              onClick={() => isWalletSufficient && setSelectedPayment("wallet")}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="wallet"
                  checked={selectedPayment === "wallet"}
                  onChange={() =>
                    isWalletSufficient && setSelectedPayment("wallet")
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  disabled={!isWalletSufficient}
                />
                <div>
                  <span className="font-medium text-gray-800">Use Wallet</span>
                  <p className="text-sm text-gray-500 mt-1">
                    Available Balance: ₹{walletBalance}
                    {!isWalletSufficient && (
                      <span className="text-red-500 ml-2">
                        Insufficient balance
                      </span>
                    )}
                  </p>
                </div>
              </label>
            </div>

            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedPayment === "cod"
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-gray-400"
              }`}
              onClick={() => setSelectedPayment("cod")}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={selectedPayment === "cod"}
                  onChange={() => setSelectedPayment("cod")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <span className="font-medium text-gray-800">
                    Pay on Delivery
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    Cash, UPI, or Card on delivery
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-3">Delivery Time</h3>
          <select
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          >
            <option value="">Choose Delivery Time</option>
            {deliveryTimes.map((time) => (
              <option key={time.id} value={time.id}>
                {time.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-3">Promo Code</h3>
          <div className="flex">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className={`flex-1 p-3 border rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                promoApplied ? "bg-green-50 border-green-500" : ""
              }`}
            />
            <button
              onClick={applyPromoCode}
              className={`px-4 py-3 rounded-r-lg font-medium ${
                promoApplied
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              } transition-colors`}
            >
              {promoApplied ? "APPLIED" : "APPLY"}
            </button>
          </div>
          {promoApplied && (
            <p className="text-sm text-green-600 mt-1">
              Promo code applied successfully! You saved ₹
              {Math.round(total * 0.1).toFixed(2)}
            </p>
          )}
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-3">
            Delivery Instructions (Optional)
          </h3>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Add any special instructions for delivery"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            rows="3"
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
        >
          Back to Address
        </button>
      </div>
    </div>
  );
};

export default DeliveryContent;

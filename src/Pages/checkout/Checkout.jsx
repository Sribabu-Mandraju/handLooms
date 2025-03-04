"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "./ProgressSteps";
import CartContent from "./CartContent";
import AddressForm from "./AddressForm";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const { total, items, clearCart } = useCart();
  const deliveryCharge = 10;
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [address, setAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!items || items.length === 0) {
      navigate("/cart");
    }
  }, []);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(Math.round(total * 0.1));
      setPromoApplied(true);
    } else {
      setDiscount(0);
      setPromoApplied(false);
      alert("Invalid promo code");
    }
  };

  const handleNext = () => {
    if (!items || items.length === 0) {
      navigate("/cart");
      return;
    }

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  const generateOrderId = () => {
    return "ORD" + Date.now().toString().slice(-8);
  };

  const handlePlaceOrder = () => {
    if (!items || items.length === 0) {
      navigate("/cart");
      return;
    }

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    const order = {
      id: newOrderId,
      date: new Date().toISOString(),
      status: "Order Placed",
      items: items,
      total: total + deliveryCharge - discount,
      paymentMethod: "cod",
      address: address,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    setShowSuccessModal(true);

    setTimeout(() => {
      clearCart();
    }, 100);
  };

  const handleTrackOrder = () => {
    setShowSuccessModal(false);
    navigate("/track-order");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-8 md:p-6 bg-gray-50 min-h-screen">
      <ProgressSteps step={step} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {step === 1 && <CartContent onNext={handleNext} />}
          {step === 2 && (
            <AddressForm
              address={address}
              onChange={handleAddressChange}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 3 && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-4">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border border-blue-500 rounded-lg bg-blue-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked
                        disabled
                        className="w-5 h-5 text-blue-600"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Pay on Delivery
                        </h3>
                        <p className="text-sm text-gray-600">
                          Pay with cash upon delivery
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg opacity-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        disabled
                        className="w-5 h-5 text-gray-400"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Online Payment
                        </h3>
                        <p className="text-sm text-gray-600">
                          Pay with Razorpay or PayPal (Coming Soon)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <OrderSummary
            step={step}
            deliveryCharge={deliveryCharge}
            promoApplied={promoApplied}
            discount={discount}
          />

          {/* Secure Checkout Badge */}
          {/* <div className="mt-4 bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Secure Checkout</span>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              <img
                src="https://via.placeholder.com/40x25"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://via.placeholder.com/40x25"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://via.placeholder.com/40x25"
                alt="PayPal"
                className="h-6"
              />
            </div>
          </div> */}

          {/* Need Help Section */}
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-medium text-gray-800 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-2">
              Our customer service is available 24/7
            </p>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
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
                  {orderId}
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(orderId);
                    const button = document.getElementById("copyButton");
                    button.innerHTML = `
                      <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Copied!
                    `;
                    setTimeout(() => {
                      button.innerHTML = "Copy to Clipboard";
                    }, 2000);
                  }}
                  id="copyButton"
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800 cursor-pointer flex items-center justify-center mx-auto"
                >
                  Copy to Clipboard
                </button>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleTrackOrder}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                Track Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

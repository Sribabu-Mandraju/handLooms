"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ProgressSteps from "./ProgressSteps";
import CartContent from "./CartContent";
import AddressContent from "./AddressContent";
import DeliveryContent from "./DeliveryContent";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const { total } = useCart();
  const deliveryCharge = 10;
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [address, setAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
  });

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

  return (
    <div className="max-w-6xl mx-auto p-4 mt-8 md:p-6 bg-gray-50 min-h-screen">
      <ProgressSteps step={step} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {step === 1 && <CartContent onNext={() => setStep(2)} />}
          {step === 2 && (
            <AddressContent
              address={address}
              onChange={handleAddressChange}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <DeliveryContent
              selectedPayment={selectedPayment}
              setSelectedPayment={setSelectedPayment}
              deliveryTime={deliveryTime}
              setDeliveryTime={setDeliveryTime}
              instructions={instructions}
              setInstructions={setInstructions}
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              applyPromoCode={applyPromoCode}
              promoApplied={promoApplied}
              onBack={() => setStep(2)}
              total={total}
            />
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
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md border border-gray-100">
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
          </div>

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
    </div>
  );
};

export default Checkout;

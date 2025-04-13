"use client";

import { useState } from "react";

export default function StartSavingModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState(500); // default recommended amount

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,

      amount: amount * 100, // Razorpay takes paisa
      currency: "INR",
      name: "Your App Name",
      description: "Kickstart your savings",
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
        onClose();
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
      },
      theme: {
        color: "#6366f1",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Start Saving</h3>
        <p className="mb-2">Recommended amount: ₹500</p>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min={1}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition"
          >
            Pay ₹{amount}
          </button>
        </div>
      </div>
    </div>
  );
}

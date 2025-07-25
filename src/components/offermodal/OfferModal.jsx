// components/shared/OfferModal.jsx
import React from "react";

const OfferModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-5 w-full max-w-md shadow-xl relative">
        <h2 className="text-xl font-bold mb-2">🎉 Welcome Offer!</h2>
        <p className="text-gray-700 mb-5">
          Enjoy free delivery on your first order!
        </p>
        <img
          src="/assets/images/banners/offer.jpg"
          alt=""
          className="w-full rounded-md"
        />
        <div className="text-center">
          <button
            onClick={() => {
              onClose();
              document.getElementById("order-now").scrollIntoView();
            }}
            className="btn mt-5"
          >
            Order Now
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OfferModal;

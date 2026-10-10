"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PartnerSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFarmer: () => void;
  onSelectOffTaker: () => void;
  onSelectInvestor: () => void;
}

export default function PartnerSelectionModal({
  isOpen,
  onClose,
  onSelectFarmer,
  onSelectOffTaker,
  onSelectInvestor,
}: PartnerSelectionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl w-full max-w-4xl p-8 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Partner with Us
              </h2>
              <p className="text-gray-600 text-lg">
                Choose how you&apos;d like to partner with AgriPath
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Farmer Card */}
            {/* eslint-disable-next-line jsx-a11y/aria-props */}
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onClose();
                  onSelectFarmer();
                }}
                className="group bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 text-left hover:border-green-400 transition-all duration-300"
              >
               <div className="w-full h-50 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                <Image
                  src="/people/farmer.png"
                  alt="Farmer with produce"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Farmer</h3>
                <p className="text-gray-600 text-sm">
                  Join our network of outgrowers and grow quality produce with our
                  support and guaranteed offtake.
                </p>
                <div className="mt-4 flex items-center text-green-700 font-medium text-sm group-hover:underline">
                  Partner as Farmer
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.button>

              {/* OffTaker Card */}
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onClose();
                  onSelectOffTaker();
                }}
                className="group bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-6 text-left hover:border-orange-400 transition-all duration-300"
              >
              <div className="w-full h-50 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                <Image
                  src="/people/buyer.png"
                  alt="Farmer with produce"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">OffTaker</h3>
                <p className="text-gray-600 text-sm">
                  Secure reliable access to quality fresh produce directly from our
                  farm network.
                </p>
                <div
                  className="mt-4 flex items-center font-medium text-sm group-hover:underline"
                  style={{ color: "#D97706" }}
                >
                  Partner as Buyer
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.button>

              {/* Investor Card */}
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onClose();
                  onSelectInvestor();
                }}
                className="group bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 text-left hover:border-blue-400 transition-all duration-300"
              >
                <div className="w-full h-50 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                <Image
                  src="/people/investor.png"
                  alt="Farmer with produce"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Investor</h3>
                <p className="text-gray-600 text-sm">
                  Invest in sustainable agriculture and earn returns while
                  supporting food security.
                </p>
                <div className="mt-4 flex items-center text-blue-700 font-medium text-sm group-hover:underline">
                  Partner as Investor
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

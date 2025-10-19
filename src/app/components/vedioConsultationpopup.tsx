"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function VedioConsultationPopup() {
  const [show, setShow] = useState(false);

  // Auto show after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-gradient-to-b from-emerald-50 via-green-100 to-emerald-100 rounded-3xl shadow-xl w-full max-w-2xl p-8 md:p-10 text-center border border-green-200 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
              aria-label="Close popup"
            >
              <X size={22} />
            </button>

            {/* Image */}
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <Image
                  src="/doctor_patient.png"
                  alt="Doctor and patient consultation"
                  className="object-contain rounded-2xl"
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 400px"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#2BA84A] mb-3">
              🌿 Experience the Essence of Ayurveda
            </h2>
            <p className="text-[#333333] mb-6 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Revitalize your mind and body with ancient Ayurvedic therapies — now available through{" "}
              <span className="font-semibold text-[#2BA84A]">online video consultations</span> with our experienced doctors.
            </p>

            <motion.a
              href="https://docco360.com/alldoctors?navigate=doctors"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FF6B3D] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#e85a2d] transition"
            >
              Book Appointment
            </motion.a>

            <p className="text-sm text-[#333333] mt-4">
              Connect from anywhere — personalized care, real results.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

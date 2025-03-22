import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X size={32} />
      </button>
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        src={imageUrl}
        alt="Enlarged view"
        className="max-w-full max-h-[90vh] object-contain"
      />
    </motion.div>
  );
};

export default ImageModal;
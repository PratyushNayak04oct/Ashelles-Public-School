
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUpNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    if (inView) {
      startTime = 0;
      animationFrame = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default CountUpNumber;
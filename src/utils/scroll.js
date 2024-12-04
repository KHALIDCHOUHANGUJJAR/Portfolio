"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (refs) => {
  useEffect(() => {
    if (!refs || refs.length === 0) return;

    const sr = ScrollReveal({
      origin: "top",
      distance: "75px",
      duration: 3000,
      reset: true,
    });

    refs.forEach((ref, index) => {
      if (ref.current) {
        sr.reveal(ref.current, { delay: index * 100 }); 
      }
    });
  }, [refs]);
};

export default useScrollReveal;

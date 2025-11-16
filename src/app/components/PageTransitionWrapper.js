"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// This component wraps your page content
export default function PageTransitionWrapper({ children }) {
  // We need the pathname here to tell AnimatePresence when the page changes
  const pathname = usePathname();

  const fadeVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname} // The 'key' is what triggers the exit/enter animation
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.25, type: "tween", delay: 0.1 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
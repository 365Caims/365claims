"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo({
  size = 48,
  className = ""
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
      style={{ height: size, width: "auto" }}
    >
      <Image
        src="/logo.png"
        alt="365Claims Logo"
        width={size * 2}
        height={size * 2}
        className="object-contain w-auto h-full"
        priority
        draggable="false"
      />
    </motion.div>
  );
}

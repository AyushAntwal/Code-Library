"use client";
import Image from "next/image";
import React from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimensions from "../app/providers/useDimensions";
const images = [
  "jacket4.jpg",
  "jacket1.jpg",
  "jacket3.jpg",
  "jacket5.jpg",
  "jacket2.jpg",
  "jacket6.jpg",
  "jacket7.jpg",
  "jacket8.jpg",
  "jacket9.jpg",
  "jacket12.jpg",
  "jacket11.jpg",
  "jacket10.jpg"
];
function ImageGallery() {
  const ref = React.useRef(null);
  const { height } = useDimensions();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity1 = useTransform(scrollYProgress, [0, 1], [0, height * 2.95]);
  const opacity2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const opacity3 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const opacity4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  return (
    <div className="h-[175vh] bg-white/20 flex  overflow-hidden flex-row p-4 gap-2 box-border">
      <Column images={images.slice(0, 3)} y={opacity1} t={90} />
      <Column images={images.slice(3, 7)} y={opacity2} t={60} />
      <Column images={images.slice(7, 10)} y={opacity3} t={98} />
      <Column images={images.slice(10, 13)} y={opacity4} t={80} />
    </div>
  );
}

export default ImageGallery;

const Column = ({ images, y = 0, t = 0 }: { images: string[]; y?: any; t?: any }) => {
  return (
    <motion.div className="w-1/4 h-full flex flex-col gap-4 min-w-[250px] relative" style={{ y: y, top: `-${t}vh` }}>
      {images.map((image, index) => (
        <div key={index} className={`w-full h-full  border-blue-500 relative rounded-lg overflow-hidden`}>
          <Image src={`/jackets/${image}`} style={{objectFit: 'cover'}} alt={image} fill />
        </div>
      ))}
    </motion.div>
  );
};

"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

export function Carousel({ images }: { images: ReactNode[] }) {
    const [currentImage, setCurrentImage] =  useState(0);
    return (
        <div className="ImageCarousel flex">
            <button className="prev" onClick={() => setCurrentImage(currentImage-1)}>&lt;</button>
            <div className="img">{images[currentImage]}</div>
            <button className="next" onClick={() => setCurrentImage(currentImage+1)}>&gt;</button>
        </div>
    )
}

export function CarouselImage({ src, caption, width, height }: {src: string, caption: string, width: number, height: number}) {
    return <Image src={src} alt={caption} width={width} height={height}/>
}
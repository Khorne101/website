"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
 
export function Carousel({ images }: { images: ReactNode[] }) {
    let [currentImage, setCurrentImage] = useState(0);
    let numberOfImages = 4;
    function imageFlip(imageIndex: number) {
        console.log(imageIndex);
        if (imageIndex < 0) {
            setCurrentImage(0);
            currentImage = 0;
        } else if (imageIndex >= numberOfImages-1) {
            setCurrentImage(numberOfImages-1);
            currentImage = numberOfImages-1;
        } else {
            setCurrentImage(imageIndex)
        }
    }
    return (
        <div className="ImageCarousel flex">
            <button className="prev" onClick={() => imageFlip(currentImage-1)}>&lt;</button>
            <div className="img">{images[currentImage]}</div>
            <button className="next" onClick={() => imageFlip(currentImage+1)}>&gt;</button>
        </div>
    )
}

export function CarouselImage({ src, caption, width, height }: {src: string, caption: string, width: number, height: number}) {
    return <Image src={src} alt={caption} width={width} height={height}/>
}
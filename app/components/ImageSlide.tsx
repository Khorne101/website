import Image from "next/image";

export default function ImageSlide(props: {src: string, caption: string}) {
    return (
        <div className="slide fade">
            <Image src={props.src} alt={props.caption} style={{width: "100%"}} width={1920} height={1080}/>
            <p>{props.caption}</p>
        </div>
    )
}
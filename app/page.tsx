import Image from "next/image";
import Link from "next/link";
import ImageSlideshow from "./components/ImageSlideshow";
import ImageSlide from "./components/ImageSlide";

export default function Home() {
  return (
    <div className="main">
      <div className="header">
        <h1>Khorne</h1>
        </div>
      <div className="content">
        <h3>
          Projects
        </h3>
        <div className="content_box">
          <div className="box">
            <h3><Link href="https://khornebot.vercel.app">Khorne Bot</Link></h3>
            <p>My discord bot.</p>
          </div>
          <div className="box">
            <h3><Link href="https://xcl.hri7566.info">XCL</Link></h3>
            <p>A Organization of programmers run by me and my business <Link href="https://hri7566.info">partner</Link>.</p>
          </div>
          <div className="box">
            <h3><Link href="https://xnl.hri7566.info">XNL</Link></h3>
            <p>My specific Organization under XCL, ran by me and my team members.</p>
          </div>
          <div className="box">
            <h3><Link href="https://github.com/Khorne101">Github</Link></h3>
            <p>My Github Profile where I do the majority of my programming.</p>
          </div>
          <div className="box">
            <h3><Link href="https://git.hri7566.info/Khorne">Gitea</Link></h3>
            <p>My XCL Gitea Profile where I do the rest of my programming.</p>
          </div>
        </div>
        <h3>
          About Me
        </h3>
        <p>
          i am a persony person who persons persons in the back of a person impersonating those people to person their persons into people for me to impersonate those people into believing im the persony person who they personly want to person their persons into other persons and vans and trucks and ships and i ship those persons across this planet and i keep shipping those persony person s into this planets core to fuel my infinite desire to person them all, this has been a long and fruitless journey to self-redemption in the eyes of the ultimate person in who i want to show who the true person to take them on is, and its me, of course its me, i am the worlds most persony person and this has gotten insanely long and this is exactly how long i want it to be so i can truely test how this webpage will withstand to an insanely lone one thousand plus cahracter long about me that goes into oh so much detail about who i am and about who i am not while also giving the reader absolutely zero idea who i really am.
        </p>
        <h3>
          What I Do
        </h3>
        <p>
          We make things. What do we make? Things. We make a lot of things. Things, we make. When we make things, we are making things. Things are definitely made by us. We make things as we make them. Our things are made by us, and we made them. The things we make are made by us. Our things are made, and we made our things. We make our things, as they are our things. The things we make are constituted by the things they are. The things are things, and we made them. Our things are made. The things we make are things, they were made by us, and they are our things.
        </p>
        <h3>Blender Images Gallery</h3>
        {/* <div className="image_slideshow">
          <div className="slides fade">
            <div className="numbertext">1 / 3</div>
            <img src="" style={{ width: 100 }}/>
            <div className="slides_text">Caption Two</div>
          </div>
        </div> */}
        <ImageSlideshow>
          <ImageSlide src="/image.png" caption=""/>
          <ImageSlide src="/image2.png" caption=""/>
        </ImageSlideshow>
        
      </div>
    </div>
  );
}

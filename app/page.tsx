import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <div className="header">
        <p>Khorne</p>
      </div>
      <div className="content">
        <h3>
          Projects
        </h3>
        <div className="content_box">
          <box>
            <h3><Link href="https://khornebot.vercel.app">Khorne Bot</Link></h3>
            <p>My discord bot.</p>
          </box>
          <box>
            <h3><Link href="https://xcl.vercel.app">XCL</Link></h3>
            <p>A group of programmers run by me and my <Link href="https://hri7566.info">partner</Link>.</p>
          </box>

        </div>
        <h3>
          About Me
        </h3>
        <p>
          i am a persony person who persons persons in the back of a person impersonating those people to person their persons into people for me to impersonate those people into believing im the persony person who they personly want to person their persons into other persons and vans and trucks and ships and i ship those persons across this planet and i keep shipping those persony person s into this planets core to fuel my infinite desire to person them all, this has been a long and fruitless journey to self-redemption in the eyes of the ultimate person in who i want to show who the true person to take them on is, and its me, of course its me, i am the worlds most persony person and this has gotten insanely long and this is exactly how long i want it to be so i can truely test how this webpage will withstand to an insanely lone one thousand plus cahracter long about me that goes into oh so much detail about who i am and about who i am not while also giving the reader absolutely zero idea who i really am.
        </p>
      </div>
    </div>
  );
}

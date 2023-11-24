import React from "react";
import Image from "next/image";
import Link from "next/link";
import YouTubeGallery from "../vedioData/vedioData";
import AdsVedios from "../AdsVedios/ads";

function Vedios() {
  return (
    <div className=" mt-32 ">
      <div className="sm:container mx-auto ">
        <div className="  flex justify-evenly my-4 sm:my-11 items-center gap-x-9">
          {/* left side */}
          <div className="hidden sm:flex">
            <Image
              src="/images/banner.png"
              alt="banner"
              height={100}
              width={300}
              className=""
            />
          </div>

          {/* right side */}
          <div className="small:grid justify-items-center small:text-center sm:block sm:text-justify small:mx-auto sm:mx-0">
            <Link href="/sections/graphic">
              <button className=" border-transparent bg-gray-800 bg-opacity-90  rounded-md px-4 py-3 font-semibold text-white ">
                Switch To Graphics
              </button>
            </Link>
            <h1 className="text-3xl leading-10 font-bold  py-3 tracking-wider ">
              THINKS CREATIVELY, DESIGN STRATEGICALLY.
            </h1>
            <p className="text-base font-extralight w-[350px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, facere suscipit? Non exercitationem repudiandae
              minima, et quis tempora suscipit, cupiditate praesentium deserunt
              laboriosam error corrupti accusantium blanditiis dignissimos
              asperiores eos?
            </p>
          </div>
        </div>
        <div className="my-8 sm:my-16">
          <YouTubeGallery />
          <AdsVedios />
        </div>
      </div>
    </div>
  );
}

export default Vedios;

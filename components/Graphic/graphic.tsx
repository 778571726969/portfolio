import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logos from "../Logos/logos";
import Social from "../socialMeidaPosts/socialMedia";
import Banner from "../Banners/banners";
import Busines from "../Business/business";
import Flyers from "../flyer/flyer";
import Mobiles from "../mobile app design/mobileDesign";
import Mockups from "../Mockups/mockups";
import Thumbnails from "../thumbnail/thumbnail";
import Webs from "../web design/webDesign";

function Graphic() {
  return (
    <div className="mt-32  ">
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
            <Link href="/sections/vedio">
              <button className=" border-transparent bg-gray-800 bg-opacity-90  rounded-md px-4 py-3 font-semibold text-white ">
                Switch To Videos
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
            {/* <div className="flex gap-x-3 items-center">
              <Link href={"https://www.instagram.com/designs_by_mahad/"}>
                <Image
                  src={"/images/instagram.png"}
                  alt="instagram"
                  height={30}
                  width={25}
                />
                <Link href={"https://www.linkedin.com/in/mahad-h-aa883b214/"}>
                  <Image
                    src={"/images/linkedin.png"}
                    alt="linkedin"
                    height={29}
                    width={30}
                  />
                </Link>
              </Link>
              <Link href={"https://dribbble.com/Maddie0o7"}>
                <Image
                  src={"/images/dribble.png"}
                  alt="dribble"
                  height={27}
                  width={31}
                />
              </Link>
            </div> */}
          </div>
        </div>
        <div>
          <Logos />
          <Social />
          <Banner />
          <Busines />
          <Flyers />
          <Mobiles />
          <Mockups />
          <Thumbnails />
          <Webs />
        </div>
      </div>
    </div>
  );
}

export default Graphic;

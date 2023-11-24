import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-screen scrollbar-hide overflow-scroll text-center sm:mt-0 mt-4 !scroll-smooth">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div
          className="fixed sm:w-screen h-screen flex justify-center items-center flex-col -z-10   mt-2 sm:mt-10 
          "
        >
          <Image
            className=" rounded-full shadow-lg"
            width={200}
            height={200}
            alt={"img"}
            src={"/images/mahadimg.jpg"}
          />

          <div className=" leading-10 space-y-4 my-3">
            <h1 className=" text-5xl font-bold">Mahad Hussain</h1>
            <h3 className=" text-3xl ">Graphic Designer</h3>

            <p className=" sm:w-[600px] mx-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ipsam, nihil officia aut facilis ipsa amet a omnis iure cum quos
              tenetur quam voluptatibus fugit iste veniam. Neque placeat
              recusandae iure deleniti, dicta pariatur id ipsa reprehenderit
              soluta dolor sint inventore voluptate sit asperiores quisquam
              perspiciatis, eveniet quidem! Quibusdam, obcaecati.
            </p>
          </div>
        </div>

        <div className="mt-[1200px] backdrop-blur-sm ">
          <div className=" h-[800px] z-20 flex justify-center items-center gap-10 sm:text-4xl small:text font-bold uppercase mx-7 ">
            <Link className=" relative" href="../../sections/graphic">
              <h3 className=" absolute text-white bottom-0 px-4 py-4">
                Graphic <br />
                Designing
              </h3>
              <div className=" w-auto sm:w-96 h-auto sm:h-[30rem] rounded-2xl shadow-xl flex items-center overflow-hidden">
                <Image
                  src={"/images/graphic.jpg"}
                  alt=""
                  width={390}
                  height={390}
                />
              </div>
            </Link>

            <Link className=" relative" href="../../sections/vedio">
              <h3 className=" absolute text-white bottom-0 px-4 py-4">
                Video <br />
                Editing
              </h3>
              <div className=" w-auto sm:w-96 -auto sm:h-[30rem] rounded-2xl shadow-xl flex items-center overflow-hidden">
                <Image
                  src={"/images/video.jpg"}
                  alt=""
                  width={390}
                  height={390}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

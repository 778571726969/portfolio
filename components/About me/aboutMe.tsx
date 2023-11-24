import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function AboutMe() {
  return (
    <div className="mt-32 mx-5 mdd:container mdd:mx-auto">
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
      <div className=" mx-auto mdd:grid grid-cols-2 gap-7 my-5">
        <div className="grid col-span-1 justify-items-center ">
          <Image
            src={"/images/about.png"}
            alt="image"
            height={800}
            width={800}
          />
        </div>
        <span className=" grid mdd:col-span-1 my-auto  text-center justify-items-center mdd:justify-items-start mdd:text-justify ">
          <h1 className=" font-medium text-3xl sm:text-7xl tracking-wider my-3 sm:my-8">
            ABOUT ME
          </h1>
          <p className="text-justify py-2 font-light sm:text-2xl tracking-wide ">
            👋 Hello, i am Mahad Hussain, a passionate Graphic Designer and
            Video Editor with over 6 years of experience in the creative
            industry.I have always been drawn to the world of visual
            storytelling, and my journey as a designer and editor has allowed me
            to turn that passion into a career.
          </p>
          {/* <h1 className=" font-bold text-2xl tracking-wider leading-3 text-center">
            My Creative Journey
          </h1> */}
          <p className="text-justify py-2 fo font-light sm:text-2xl tracking-wide ">
            🎨 My creative journey began over six years ago, and its been a
            thrilling ride ever since. I havve had the privilege of working with
            a diverse range of clients, from small startups to established
            brands, and everything in between. This experience has honed my
            skills and allowed me to adapt to different styles and project
            requirements.
          </p>
          <p className="text-justify py-2 font-light sm:text-2xl tracking-wide ">
            🎨 My creative journey began over six years ago, and its been a
            thrilling ride ever since. I havve had the privilege of working with
            a diverse range of clients, from small startups to established
            brands, and everything in between. This experience has honed my
            skills and allowed me to adapt to different styles and project
            requirements.
          </p>
          <div className="flex gap-5 my-4 items-center">
            <Link href={"https://www.instagram.com/designs_by_mahad/"}>
              <Image
                src={"/images/instagram.png"}
                alt="instagram"
                height={30}
                width={35}
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/mahad-h-aa883b214/"}>
              <Image
                src={"/images/linkedin.png"}
                alt="linkedin"
                height={29}
                width={40}
              />
            </Link>
            <Link href={"https://dribbble.com/Maddie0o7"}>
              <Image
                src={"/images/dribble.png"}
                alt="dribble"
                height={27}
                width={41}
              />
            </Link>
          </div>
        </span>
      </div>

      {/* <div className="space-y-3 my-2  justify-items-center  text-center">
        <h1 className=" font-bold text-2xl tracking-wider leading-3 ">
          What I Do?
        </h1>
        <p className="text-justify py-2  font-normal text-base tracking-wide leading-7">
          🎥 As a Video Editor, I specialize in crafting engaging and compelling
          video content that captivates and communicates your message
          effectively. Whether its a promotional video, a cinematic masterpiece,
          or a quick social media snippet, I take pride in ensuring that every
          frame tells a story.
        </p>

        <p className="text-justify py-1  font-normal text-base tracking-wide leading-7">
          🎨 As a Graphic Designer, I create visual experiences that leave a
          lasting impression. From logo design to web graphics, my designs are
          not just visually appealing but also strategically aligned with your
          brands goals.
        </p>
        <h1 className=" font-bold text-2xl tracking-wider leading-3 text-center">
          Why Choose Me?
        </h1>
        <p className="text-justify py-2  font-normal text-base tracking-wide leading-7">
          ✨ Creativity: I approach each project with a fresh perspective,
          always seeking innovative and creative solutions.
        </p>

        <p className="text-justify py-2  font-normal text-base tracking-wide leading-7">
          📈 Experience: With over 6 years in the industry, I bring a wealth of
          experience to every project.
        </p>

        <p className="text-justify py-2  font-normal text-base tracking-wide leading-7">
          🤝 Collaboration: I believe in working closely with clients to ensure
          their vision is realized.
        </p>

        <p className="text-justify py-2  font-normal text-base tracking-wide leading-7">
          🚀Results: My goal is to help you achieve your objectives through
          compelling visuals and video content.
        </p>
        <h1 className=" font-bold text-2xl tracking-wider leading-3 text-center">
          Lets Collaborate
        </h1>
        <p className="text-justify py-2  font-normal text-base tracking-wide leading-7">
          I am always on the lookout for exciting new projects and
          collaborations. Whether you have a specific design or video editing
          project in mind or want to discuss a custom concept, I am here to
          bring your ideas to life.
        </p>

        <p className="text-justify py-2  font-normal text-base tracking-wide leading-7">
          Feel free to browse through my portfolio to see some of my past work,
          and if youare interested in working together, dont hesitate to get in
          touch. Lets create something amazing together!
        </p>
        <br />
        <p>
          Thank you for visiting my portfolio, and I look forward to the
          possibility of working with you.
        </p>

        <Link href={"../sections/contact"}>
          <button className=" bg-black opacity-70 px-6 py-2 my-8 text-white font-semibold tracking-wider rounded-full">
            Contact Me
          </button>
        </Link>
      </div> */}
    </div>
  );
}

"use client";
import React from "react";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import { socialMedia } from "../../sanity/socialMedia";
import { Image as Iimage } from "antd";
import Link from "next/link";

export const SocialData = async () => {
  const response = await client.fetch(
    `*[_type=="social"]{"image":image.asset->url}`
  );
  return response;
};
interface SocialMedia {
  image: IImage;
}
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Social() {
  const data: SocialMedia[] = await SocialData();
  const showedImages = data.slice(0, 8);

  const App: React.FC = () => (
    <Iimage.PreviewGroup
      preview={{
        onChange: (current, prev) =>
          console.log(`current index: ${current}, prev index: ${prev}`),
      }}
    >
      {showedImages.map((item) => (
        <Iimage
          key={crypto.randomUUID()}
          src={urlForImage(item.image).url()}
          className="shadow-md shadow-black h-auto w-auto"
        />
      ))}
    </Iimage.PreviewGroup>
  );
  return (
    <div className="my-7 sm:my-28  ">
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
      <div className="text-center">
        <h1 className="text-3xl font-bold leading-10 tracking-wide">
          SOCIAL MEDIA POSTS
        </h1>
        <h2 className="text-lg font-semibold leading-10 tracking-widest">
          OFFERING YOU THE BEST CREATIVE MINDS
        </h2>
      </div>
      <div className="grid small:grid-cols-2 sm:grid-cols-4 gap-6 small:mx-4 my-8  ">
        <App />
      </div>

      <div className="grid  justify-center my-12">
        <Link href="/sections/AllSocial">
          <button className="border-transparent bg-gray-800 bg-opacity-90  rounded-md px-10 py-3 font-semibold text-white ">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}

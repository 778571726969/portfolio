"use client";
import React from "react";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import { thumbnails } from "../../sanity/thumbnail";
import { Image as Iimage } from "antd";
import Link from "next/link";

export const Thumbnail = async () => {
  const response = await client.fetch(
    `*[_type=="thumbnails"]{"image":image.asset->url}`
  );
  return response;
};
interface Thumb {
  image: IImage;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Thumbnails() {
  const data: Thumb[] = await Thumbnail();
  const showedImages = data.slice(0, 4);

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
    <div className="my-7 sm:my-28   ">
      <div className="">
        <div className="text-center">
          <h1 className="text-3xl font-bold leading-10 tracking-wide">
            Thumbnails
          </h1>
          <h2 className="text-lg font-semibold leading-10 tracking-widest">
            OFFERING YOU THE BEST CREATIVE MINDS
          </h2>
        </div>
        <div className="grid small:grid-cols-2 sm:grid-cols-4 gap-6 small:mx-4 my-8 ">
          <App />
        </div>

        <div className="grid  justify-center my-12">
          <Link href="/sections/AllThumbnail">
            <button className="border-transparent bg-gray-800 bg-opacity-90  rounded-md px-10 py-3 font-semibold text-white ">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import { logo } from "../../sanity/logo";
import { Image as Iimage } from "antd";

export const LogoData = async () => {
  const response = await client.fetch(
    `*[_type=="logo"]{"image":image.asset->url}`
  );
  return response;
};
interface Logo {
  image: IImage;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Logos() {
  const data: Logo[] = await LogoData();
  const showedImages = data.slice(0, 15);

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
          className="shadow-md shadow-black "
        />
      ))}
    </Iimage.PreviewGroup>
  );
  return (
    <div className="my-28  ">
      <div className="">
        <div className="grid small:grid-cols-2 sm:grid-cols-4 gap-6 small:mx-4 my-8 ">
          <App />
        </div>
      </div>
    </div>
  );
}

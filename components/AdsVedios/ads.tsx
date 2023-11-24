"use client";
import { client } from "../../sanity/lib/client";
import { Ads } from "../../sanity/ads";
import React from "react";
import Link from "next/link";

export const Ad = async () => {
  const response = await client.fetch(`*[_type == "AdsVideo"]{vediourl}`);

  return response;
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function AdsVedios() {
  const Data: any[] = await Ad();
  const data = Data.slice(0, 3);

  return (
    <div className="">
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
        <h1 className="text-3xl font-bold leading-10 tracking-wide">Ads </h1>
        <h2 className="text-lg font-semibold leading-10 tracking-widest">
          OFFERING YOU THE BEST CREATIVE MINDS
        </h2>
      </div>

      <div className="grid  small:justify-items-center md:grid-cols-2 grid-cols-1 xl:grid-cols-3  gap-10 small:mx-4 my-8">
        {data.map((item) => (
          <div key={crypto.randomUUID()}>
            <iframe
              height={"200px"}
              width={"350px"}
              frameBorder="0"
              allowFullScreen
              src={item.vediourl}
              className="my-6 hover:opacity-75 rounded-2xl"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="grid  justify-center my-12">
        <Link href="/sections/AllAds">
          <button className="border-transparent bg-gray-800 bg-opacity-90  rounded-md px-10 py-3 font-semibold text-white ">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}

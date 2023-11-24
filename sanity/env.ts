import { use } from "react";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-08-13";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
export const token = assertValue(
  process.env.SANITY_ACCESS_TOKEN,
  "Missing environment variable: SANITY_ACCESS_TOKEN"
);

export const useCdn = true;
console.log(
  "apiversion: " + apiVersion,
  " dataset :" + dataset,
  " projectid :" + projectId,
  " token :" + token,
  " Cdn:" + useCdn
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

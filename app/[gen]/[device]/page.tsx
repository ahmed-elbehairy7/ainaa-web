import React from "react";
import { mobile, router, windows } from "@/app/devices";
import Steps from "@/app/components/Steps";
import CardDevice from "@/app/components/CardDevice";
import { notFound } from "next/navigation";

function page({ params }: { params: { gen: string; device: string } }) {
  if (
    params.device !== "mobile" &&
    params.device !== "windows" &&
    params.device !== "router"
  ) {
    return notFound();
  }
  const device =
    params.device === "mobile"
      ? mobile
      : params.device === "windows"
      ? windows
      : router;
  return (
    <div className="flex flex-col items-center justify-center mb-0 mt-8 mx-auto gap-8 ">
      <CardDevice device={device} href={`/${params.gen}/${params.device}`} />
      <div className="w-full ">
        <Steps />
      </div>
    </div>
  );
}

export default page;

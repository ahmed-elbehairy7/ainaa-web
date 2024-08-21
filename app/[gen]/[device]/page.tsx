"use client";
import React, { useEffect, useState } from "react";
import { mobile, router, windows, GEN1, GEN2 } from "@/app/data";
import Steps from "@/app/components/Steps";
import CardDevice from "@/app/components/CardDevice";
import { notFound } from "next/navigation";

function Page({ params }: { params: { gen: string; device: string } }) {
  const [activeGen, setActiveGen] = useState(GEN1);
  const [activeDevice, setActiveDevice] = useState(mobile);
  useEffect(() => {
    if (
      params.device !== "mobile" &&
      params.device !== "windows" &&
      params.device !== "router"
    ) {
      return notFound();
    } else {
      if (params.gen == "gen1") {
        setActiveGen(GEN1);
      }
      if (params.gen == "gen2") {
        setActiveGen(GEN2);
      }
      if (params.device === "mobile") {
        setActiveDevice(mobile);
      }
      if (params.device === "windows") {
        setActiveDevice(windows);
      }
      if (params.device === "router") {
        setActiveDevice(router);
      }
    }
  }, [params.gen, params.device]);

  return (
    <div className="flex flex-col items-center justify-center  mt-8  gap-8 ">
      <CardDevice
        device={activeDevice}
        href={`/${params.gen}/${params.device}`}
      />
      <div className="w-full ">
        <Steps activeGen={activeGen} />
      </div>
    </div>
  );
}

export default Page;

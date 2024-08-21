import React from "react";
import { notFound } from "next/navigation";
import CardGen from "../components/CardGen";
import { GEN1, GEN2 } from "../gens";
import CardDevice from "../components/CardDevice";
import { router, windows, mobile } from "../devices";

function Page({ params }: { params: { gen: string } }) {
  if (!params || !params.gen) {
    return <div>Error: Missing parameter</div>;
  }
  if (params.gen !== "gen1" && params.gen !== "gen2") {
    return notFound();
  }

  return (
    <div
      className="flex flex-col items-center justify-center mb-0 mt-8 mx-auto gap-8 "
      dir="rtl"
    >
      <CardGen gen={params.gen == "gen1" ? GEN1 : GEN2} />
      <div className=" w-4/5 grid grid-cols-3 gap-4">
        <CardDevice device={router} href={`/${params.gen}/Router`} />
        <CardDevice device={windows} href={`/${params.gen}/windows`} />
        <CardDevice device={mobile} href={`/${params.gen}/mobile`} />
      </div>
    </div>
  );
}

export default Page;

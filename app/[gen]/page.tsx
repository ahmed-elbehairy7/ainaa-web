import React from "react";
import { notFound } from "next/navigation";
import Card from "../components/CardGen";
import { GEN1, GEN2 } from "../gens";

function Page({ params }: { params: { gen: string } }) {
  if (!params || !params.gen) {
    return <div>Error: Missing parameter</div>;
  }
  if (params.gen !== "gen1" && params.gen !== "gen2") {
    return notFound();
  }

  return (
    <div
      className="flex flex-col items-center justify-center mb-0 mt-8 mx-auto "
      dir="rtl"
    >
      <Card gen={params.gen == "gen1" ? GEN1 : GEN2} />
    </div>
  );
}

export default Page;

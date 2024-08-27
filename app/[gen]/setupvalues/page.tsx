import { genName } from "@/app/appTypes";
import React from "react";
import { genData, gensParams } from "@/app/[gen]/genData";
import setupValuesData, {
  levelSetupValues,
} from "@/app/setupvalues/setupValuesData";
import Table from "@/app/components/Table";

// TODO: implement an appropriate design

const SetupValuesPage = ({ params }: { params: { gen: genName } }) => {
  const setupValues = setupValuesData[params.gen];
  const gen = genData[params.gen];
  return (
    <div>
      <h1>{gen.ar}</h1>
      <div className="flex-row flex">
        {Object.keys(setupValues).map((valuesKey, index) => {
          const values: levelSetupValues =
            setupValues[valuesKey as "high" | "low"];
          return (
            <Table
              key={index}
              title={values.ar.title}
              domain={values.subdomain + ".mafazaa.com"}
              primary={"2"}
              secondary={"4"}
              categories={values.categories}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SetupValuesPage;

export function generateStaticParams() {
  return gensParams;
}

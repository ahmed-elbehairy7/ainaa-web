import { genName } from "@/app/appTypes";
import React from "react";
import setupValuesData, { levelSetupValues } from "./setupValuesData";
import Table from "../components/Table";
import Header from "../components/Header";

const SetupValuesPage = () => {
  const setupLevels = setupValuesData.gen1;

  return (
    <div className=" mb-10 flex flex-col items-center px-4">
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
        تفاصيل مستويات الحماية 🔒
      </h1>

      <h2 className="text-center text-3xl px-6 py-2 mb-6 font-semibold tracking-wide uppercase text-white rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-teal-700">
        الجيل الأول
      </h2>

      <div className="flex flex-col gap-0 w-full max-w-5xl">
        {Object.entries(setupLevels).map(([key, values], index) => (
          <Table
            key={index}
            title={values.ar.title}
            domain={`${values.subdomain}.mafazaa.com`}
            primary={values.primary}
            secondary={values.secondary}
            categories={values.categories}
          />
        ))}
      </div>
    </div>
  );
};

export default SetupValuesPage;

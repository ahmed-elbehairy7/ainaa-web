import React from "react";

type TableDataTypes = {
  key: number;
  domain: string;
  title: string;
  primary: string;
  secondary: string;
  categories: string[];
};

function Table({
  title,
  domain,
  primary,
  secondary,
  categories,
}: TableDataTypes) {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 md:px-8  mb-8">
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-center border-collapse">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
            <tr className="">
              <th className="py-3 px-6 border-l border-gray-200">Title</th>
              <th className="py-3 px-6 border-l border-gray-200">Domain</th>
              <th className="py-3 px-6 border-l border-gray-200">
                Primary DNS address
              </th>
              <th className="py-3 px-6 border-l border-gray-200">
                Secondary DNS address
              </th>
              <th className="py-3 px-6 ">Categories</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 ">
            <tr className="">
              <td className="px-6 py-4 whitespace-nowrap border-l border-gray-200">
                {title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-l border-gray-200">
                {domain}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-l border-gray-200">
                {primary}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-l border-gray-200">
                {secondary}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-1 max-w-fit flex-wrap">
                {categories.map((category, i) => (
                  <p key={i} className="mb-1">
                    ,{category}
                  </p>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

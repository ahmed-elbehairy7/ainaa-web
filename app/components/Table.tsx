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
    <div className="max-w-screen-xl w-full mx-auto ">
      {/* Table layout for larger screens */}
      <div className="hidden md:block mt-8 overflow-hidden border rounded-lg shadow-sm">
        <table className="min-w-full text-sm text-center border-collapse">
          <thead className="bg-gray-100 text-gray-700 font-medium border-b">
            <tr>
              {[
                "Title",
                "Domain",
                "Primary DNS",
                "Secondary DNS",
                "Categories",
              ].map((header, i) => (
                <th
                  key={i}
                  scope="col"
                  className="py-3 px-6 border-l last:border-none"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700 bg-white">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-bold border-l">{title}</td>
              <td className="px-6 py-4 border-l">{domain}</td>
              <td className="px-6 py-4 border-l">{primary}</td>
              <td className="px-6 py-4 border-l">{secondary}</td>
              <td className="px-6 py-4 flex flex-wrap justify-right gap-1">
                {categories.map((category, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Card layout for smaller screens */}
      <div className="md:hidden mt-12 space-y-4">
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h2 className="font-semibold text-lg mb-2">{title}</h2>
          <div className="text-gray-600 space-y-1">
            <p>
              <strong className="text-gray-800">Domain:</strong> {domain}
            </p>
            <p>
              <strong className="text-gray-800">Primary DNS:</strong> {primary}
            </p>
            <p>
              <strong className="text-gray-800">Secondary DNS:</strong>{" "}
              {secondary}
            </p>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {categories.map((category, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

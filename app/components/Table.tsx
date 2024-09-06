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
		<div className="max-w-screen-xl w-full mx-auto px-4 md:px-8 mb-8">
			{/* Table layout for larger screens */}
			<div className="hidden md:block mt-12 shadow-sm border rounded-lg overflow-x-auto">
				<table className="min-w-full table-auto text-sm text-center border-collapse">
					<thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
						<tr>
							<th className="py-3 px-6 border-l border-gray-200">
								Title
							</th>
							<th className="py-3 px-6 border-l border-gray-200">
								Domain
							</th>
							<th className="py-3 px-6 border-l border-gray-200">
								Primary DNS address
							</th>
							<th className="py-3 px-6 border-l border-gray-200">
								Secondary DNS address
							</th>
							<th className="py-3 px-6">Categories</th>
						</tr>
					</thead>
					<tbody className="text-gray-600">
						<tr>
							<td className="px-6 font-bold py-4 whitespace-nowrap border-l border-gray-200">
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
							<td className="px-6 py-4 whitespace-nowrap flex gap-1 flex-wrap">
								{categories.map((category, i) => (
									<p key={i} className="mb-1">
										{`${category}, `}
									</p>
								))}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* Card layout for smaller screens */}
			<div className="md:hidden mt-12 space-y-4">
				<div className="border rounded-lg p-4 shadow-sm">
					<div className="flex flex-col space-y-2">
						<div className="font-semibold text-lg">{title}</div>
						<div className="text-gray-600">
							<strong>Domain:</strong> {domain}
						</div>
						<div className="text-gray-600">
							<strong>Primary DNS address:</strong> {primary}
						</div>
						<div className="text-gray-600">
							<strong>Secondary DNS address:</strong> {secondary}
						</div>
						<div className="flex flex-wrap gap-1">
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
		</div>
	);
}

export default Table;

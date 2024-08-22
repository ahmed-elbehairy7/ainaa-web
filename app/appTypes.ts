// names
export type genName = "gen1" | "gen2";
export type deviceName = "windows" | "linux" | "router" | "android" | "ios";

// params
export type genParams = {
	name: genName;
	ar: string;
	devices: deviceName[];
	description: string;
	soon?: true;
};

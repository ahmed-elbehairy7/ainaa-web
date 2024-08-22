import { genCards } from "@/app/appData";
import { GenCardProps } from "@/app/components/GenCard";
import { deviceCardProps } from "@/app/components/DeviceCard";
import { deviceName } from "@/app/appTypes";

export const genData: { gen1: genProps; gen2: genProps } = {
	gen1: {
		...genCards[0],
		devices: (["android", "router", "windows"] as deviceName[]).map((d) => {
			return { name: d, gen: "gen1" };
		}),
	},
	gen2: { ...genCards[1], devices: [] },
};

export interface genProps extends GenCardProps {
	devices: deviceCardProps[];
}

export const gens = [{ gen: "gen1" }, { gen: "gen2" }];

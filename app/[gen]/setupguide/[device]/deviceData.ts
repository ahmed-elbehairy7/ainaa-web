import { deviceCardProps } from "@/app/components/DeviceCard";
import { genData } from "../../genData";

const deviceData: { gen1: deviceProps[]; gen2: deviceProps[] } = {
	gen1: [...(genData.gen1.devices as deviceProps[])],
	gen2: [...(genData.gen2.devices as deviceProps[])],
};

export default deviceData;

export interface deviceProps extends deviceCardProps {}

import { Tank } from "./tankClass.js";
export const t1tank = new Tank({ drill: "silver", engine: "turboDynamo", fuelType: "gas" });
t1tank.displayInfo();
export const t2tank = new Tank({ drill: "ruby", engine: "fusionCore", fuelType: "uranium" });
t2tank.displayInfo();
export const t3tank = new Tank({ drill: "amazonite", engine: "quantumDrive", fuelType: "antimater" });
t3tank.displayInfo();

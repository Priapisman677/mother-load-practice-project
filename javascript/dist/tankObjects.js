import { Tank } from "./tankClass.js";
const storedTank = localStorage.getItem('1');
export const t1tank = storedTank
    ? new Tank(JSON.parse(storedTank))
    : new Tank({ drill: "silver", engine: "turboDynamo", fuelType: "gas", speed: 0, isStorageOpen: false, movingStatus: "stopped", id: '1' });
// t1tank.displayInfo();
// console.log(t1tank)
// export const t2tank = new Tank({ drill: "ruby", engine: "fusionCore", fuelType: "uranium" });
// // t2tank.displayInfo();
// export const t3tank = new Tank({ drill: "amazonite", engine: "quantumDrive", fuelType: "antimater" });
//   // t3tank.displayInfo();

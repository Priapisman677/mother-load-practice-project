import { Tank } from "./tankClass.js";
const storedTank1 = localStorage.getItem('1');
export const t1tank = storedTank1
    ? new Tank(JSON.parse(storedTank1))
    : new Tank({
        drill: "silver",
        engine: "turboDynamo",
        fuelType: "gas",
        speed: 0,
        isStorageOpen: false,
        movingStatus: "stopped",
        id: '1'
    });
const storedTank2 = localStorage.getItem('2');
export const t2tank = storedTank2
    ? new Tank(JSON.parse(storedTank2))
    : new Tank({ drill: "ruby",
        engine: "fusionCore",
        fuelType: "uranium",
        speed: 0,
        isStorageOpen: false,
        movingStatus: "stopped", id: '1' });
// const tankList = [storedTank1, storedTank2]
// t1tank.displayInfo();
// console.log(t1tank)
// export const t2tank = new Tank({ drill: "ruby", engine: "fusionCore", fuelType: "uranium" });
// // t2tank.displayInfo();
// export const t3tank = new Tank({ drill: "amazonite", engine: "quantumDrive", fuelType: "antimater" });
//   // t3tank.displayInfo();

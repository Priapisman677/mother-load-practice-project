import { Tank } from "./tankClass.js";
//*In the instance below I used the type string | null just for learning but I could also use the Exclamation mark which leaves room for uncertainty.
const storedTank1 = localStorage.getItem("1");
export const t1tank = storedTank1
    ? new Tank(JSON.parse(storedTank1))
    : new Tank({
        drill: "silver",
        engine: "turboDynamo",
        fuelType: "gas",
        speed: 0,
        isStorageOpen: false,
        movingStatus: "stopped",
        id: "1",
    });
const storedTank2 = localStorage.getItem("2");
export const t2tank = storedTank2
    ? new Tank(JSON.parse(storedTank2))
    : new Tank({
        drill: "ruby",
        engine: "fusionCore",
        fuelType: "uranium",
        speed: 0,
        isStorageOpen: false,
        movingStatus: "stopped",
        id: "2",
    });
const storedTank3 = localStorage.getItem("3");
export const t3tank = storedTank3
    ? new Tank(JSON.parse(storedTank3))
    : new Tank({
        drill: "amazonite",
        engine: "quantumDrive",
        fuelType: "antimater",
        speed: 0,
        isStorageOpen: false,
        movingStatus: "stopped",
        id: "3",
    });
export const tankList = [t1tank, t2tank, t3tank];
console.log("🚀 ~ storedTank1:", typeof t1tank);
console.log("🚀 ~ storedTank1:", typeof t2tank);
console.log("🚀 ~ storedTank1:", typeof t3tank);
// export const t3tank = new Tank({ drill: "amazonite", engine: "quantumDrive", fuelType: "antimater" });
//   // t3tank.displayInfo();

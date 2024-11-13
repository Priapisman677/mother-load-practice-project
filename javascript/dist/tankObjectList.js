import { Tier1Tank, Tier2Tank, Tier3Tank } from "./tankClass.js";
import { turboDynamoEngine, fusionCoreEngine, quantumDriveEngine, silverDrill, rubyDrill, amazoniteDrill, gasFuelType, uraniumFuelType, antimaterFuelType } from "./itemsList.js";
//*In the TWO instances below I used the type string | null just for learning but I could also use the Exclamation mark which leaves room for uncertainty and ERRORS.
const storedTank1 = localStorage.getItem("1");
const t1tank = storedTank1
    ? new Tier1Tank(JSON.parse(storedTank1))
    : new Tier1Tank({
        drill: silverDrill,
        engine: turboDynamoEngine,
        fuelType: gasFuelType,
        speed: 0,
        isStorageOpen: false,
        movingStatus: "stopped",
        id: "1",
    });
const storedTank2 = localStorage.getItem("2");
const t2tank = storedTank2
    ? new Tier2Tank(JSON.parse(storedTank2))
    : new Tier2Tank({
        drill: rubyDrill,
        engine: fusionCoreEngine,
        fuelType: uraniumFuelType,
        speed: 0,
        isStorageOpen: false,
        movingStatus: "stopped",
        id: "2",
    });
const storedTank3 = localStorage.getItem("3");
const t3tank = storedTank3
    ? new Tier3Tank(JSON.parse(storedTank3))
    : new Tier3Tank({
        drill: amazoniteDrill,
        engine: quantumDriveEngine,
        fuelType: antimaterFuelType,
        speed: 0,
        isStorageOpen: false,
        movingStatus: "stopped",
        id: "3",
    });
export const tankList = [
    //This below is not even necessary to assert.
    t1tank,
    t2tank,
    t3tank,
];
// console.log(t2tank.test())
t1tank.displayInfo();
// console.log(tankList[1] as Tier2Tank)
// console.log((t2tank).test());
// // console.log((tankList[2]as Tier3Tank).test3())
// console.log(t2tank)

import { Tank, Tier2Tank, Tier3Tank } from "./tankClass.js";




//*In the TWO instances below I used the type string | null just for learning but I could also use the Exclamation mark which leaves room for uncertainty and ERRORS.
const storedTank1: string | null = localStorage.getItem("1");
const t1tank: Tank = storedTank1
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

const storedTank2: string | null = localStorage.getItem("2");
const t2tank: Tier2Tank = storedTank2
  ? new Tier2Tank(JSON.parse(storedTank2))
  : new Tier2Tank({
      drill: "ruby",
      engine: "fusionCore",
      fuelType: "uranium",
      speed: 0,
      isStorageOpen: false,
      movingStatus: "stopped",
      id: "2",
    });

const storedTank3: string = localStorage.getItem("3")!;
const t3tank: Tier3Tank = storedTank3
  ? new Tier3Tank(JSON.parse(storedTank3))
  : new Tier3Tank({
      drill: "amazonite",
      engine: "quantumDrive",
      fuelType: "antimater",
      speed: 0,
      isStorageOpen: false,
      movingStatus: "stopped",
      id: "3",
    });

export const tankList: (Tank | Tier2Tank | Tier3Tank)[] =
 [t1tank as Tank, t2tank as Tier2Tank, t3tank as Tier3Tank];


// console.log(t2tank.test())

// console.log(tankList[1] as Tier2Tank)

// console.log((tankList[1]as Tier2Tank).test())
// console.log((tankList[2]as Tier3Tank).test3())

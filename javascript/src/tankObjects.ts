import { Tank } from "./tankClass.js";

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
const t2tank: Tank = storedTank2
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

const storedTank3: string = localStorage.getItem("3")!;
const t3tank: Tank = storedTank3
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

export const tankList: Tank[] = [t1tank, t2tank, t3tank];




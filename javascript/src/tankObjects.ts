import { Tank } from "./tankClass.js";

//*In the instance below I used the type string | null just for learning but I could also use the Exclamation mark which leaves room for uncertainty.
const storedTank1: string | null = localStorage.getItem("1");
export const t1tank: Tank = storedTank1
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

const storedTank2: string = localStorage.getItem("2")!;
export const t2tank: Tank = storedTank2
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
export const t3tank: Tank = storedTank3
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

//I need to try replacing the current code for finding a tank by:
// function findTankById(id: string): Tank {
//   return tankList.find((tank) => tank.id === id)!;
// }

 //$This line worked succesfully because it's a miracle :D
export function findTankById(id: string):Tank | null {
  let matchingTank: Tank | null = null;
  tankList.forEach((tank) => {
    if (tank.id === id) {
      matchingTank = tank;
    }
  });
  return matchingTank;
}

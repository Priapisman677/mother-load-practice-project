import { Tank } from "./MotherLoad.js";

export const t1tank = new Tank({ drill: "silver", engine: "turboDynamo", fuelType: "gas" });

console.log('Storage', t1tank.isStorageOpen === true ? 'Open' : 'Closed')
console.log('current speed:',t1tank.speed)
console.log('MS:',t1tank.movingStatus)

t1tank.displayInfo();

export const t2tank = new Tank({ drill: "ruby", engine: "fusionCore", fuelType: "uranium" });
 console.log("🚀 ~ t2tank:", t2tank);


export const t3tank = new Tank({ drill: "amazonite", engine: "quantumDrive", fuelType: "antimater" });
 console.log("🚀 ~ t3tank:", t3tank);


 t1tank.displayInfo();
  t2tank.displayInfo();
  t3tank.displayInfo();
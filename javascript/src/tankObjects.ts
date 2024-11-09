export const t1tank = new Tank({ drill: "silver", engine: "C# :(", fuelType: "gas" });

console.log('Storage', t1tank.isStorageOpen === true ? 'Open' : 'Closed')
console.log('current speed:',t1tank.speed)
console.log('MS:',t1tank.movingStatus)

t1tank.displayInfo();

export const t2tank = new Tank({ drill: "gold", engine: "C++", fuelType: "Uranium" });
 console.log("🚀 ~ t2tank:", t2tank);


export const t3tank = new Tank({ drill: "diamond", engine: "C", fuelType: "antimater*" });
 console.log("🚀 ~ t3tank:", t3tank);

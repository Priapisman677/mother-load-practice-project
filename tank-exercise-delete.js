"use strict";
class Tank {
    constructor(tankDetails) {
        this.speed = 0;
        this.isStorageOpen = false;
        this.drill = tankDetails.drill;
        this.engine = tankDetails.engine;
    }
    displayInfo() {
        console.log(`drill: ${this.drill}, engine: ${this.engine}, speed: ${this.speed}km/h, ${this.isStorageOpen === true ? "Storage is open" : "Storage is closed"}`);
    }
    go() {
        if (this.isStorageOpen === false)
            this.speed += 5;
        if (this.speed > 200) {
            this.speed = 200;
        }
    }
    break() {
        this.speed -= 5;
        if (this.speed <= 0) {
            this.speed = 0;
        }
    }
    openStorage() {
        if (this.speed === 0) {
            this.isStorageOpen = true;
        }
    }
    closeStorage() {
        if (this.speed === 0) {
            this.isStorageOpen = false;
        }
    }
}
const t1tank = new Tank({ drill: "silver", engine: "gas" });
t1tank.openStorage();
// t1tank.closeStorage();
t1tank.go();
t1tank.displayInfo();
const t2tank = new Tank({ drill: "gold", engine: "Uranium" });
console.log("🚀 ~ t2tank:", t2tank);
const t3tank = new Tank({ drill: "diamond", engine: "antimater*" });
console.log("🚀 ~ t3tank:", t3tank);

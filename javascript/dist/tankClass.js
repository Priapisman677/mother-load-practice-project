import { gasFuelType } from './itemsList.js';
;
//!I need to change the name of this tank class:
export class Tank {
    constructor(tankDetails) {
        this.speed = 0;
        this.isStorageOpen = false;
        this.tankMessage = "";
        this.drill = tankDetails.drill;
        this.engine = tankDetails.engine;
        this.fuelType = tankDetails.fuelType;
        this.fuelCapacity = tankDetails.fuelType.fuelCapacity;
        this.speed = tankDetails.speed;
        this.isStorageOpen = tankDetails.isStorageOpen;
        this.movingStatus = tankDetails.movingStatus;
        this.id = tankDetails.id;
    }
    displayInfo() {
        console.log(`drill: ${this.drill.name}, engine: ${this.engine.name}, speed: ${this.speed}km/h, ${this.isStorageOpen === true ? "Storage is open" : "Storage is closed"}`, `movingStatus: ${this.movingStatus}`, `fuelType: ${this.fuelType}`);
    }
    go() {
        if (this.isStorageOpen === false) {
            this.speed += (5 * this.engine.speedMultiplier);
        }
        else {
            this.tankMessage = "You tried moving the tank but the storage is open!";
        }
        if (this.speed > this.engine.speedLimit) {
            this.speed = this.engine.speedLimit;
            this.tankMessage = "The tank is already at its maximum speed";
        }
        this.updateMovingStatus();
        //$ (this.fuelType.fuelCapacity) -= 1; This line was modifying the original object.
        this.fuelCapacity -= 1;
        console.log("Current capacity of this current tank:", this.fuelCapacity);
        console.log('The capacity of the original object ', gasFuelType.fuelCapacity);
    }
    break() {
        this.speed -= (5 * this.engine.breakMultiplier);
        if (this.speed < 0) {
            this.speed = 0;
            this.tankMessage = "The tank is already stopped, There is no purpose on using the break!";
        }
        this.updateMovingStatus();
    }
    openStorage() {
        if (this.isStorageOpen === true) {
            this.tankMessage = "storage is already open!";
        }
        if (this.speed === 0) {
            this.isStorageOpen = true;
        }
        else {
            this.tankMessage = "You tried opening the storage while the tank is moving!";
        }
    }
    closeStorage() {
        if (this.isStorageOpen === false) {
            this.tankMessage = "Storage is already closed!";
        }
        if (this.speed === 0) {
            this.isStorageOpen = false;
        }
    }
    updateMovingStatus() {
        this.movingStatus = this.speed > 0 ? "moving" : "stopped";
    }
}
//* Tier 1 tank class----------------------------------------
export class Tier1Tank extends Tank {
}
//* Tier 2 tank class----------------------------------------
export class Tier2Tank extends Tank {
}
//* Tier 3 tank class----------------------------------------
export class Tier3Tank extends Tank {
}
// test1(){
//   console.log('This is the test() function: This should only work for Tier 1 tank')
// }

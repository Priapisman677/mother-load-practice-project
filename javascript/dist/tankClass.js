;
export class Tank {
    constructor(tankDetails) {
        this.speed = 0;
        this.isStorageOpen = false;
        this.movingStatus = "stopped";
        this.tankMessage = "Message: Be able to move more and more speed capacity depending on the engine";
        this.drill = tankDetails.drill;
        this.engine = tankDetails.engine;
        this.fuelType = tankDetails.fuelType;
    }
    displayInfo() {
        console.log(`drill: ${this.drill}, engine: ${this.engine}, speed: ${this.speed}km/h, ${this.isStorageOpen === true ? "Storage is open" : "Storage is closed"}`, `movingStatus: ${this.movingStatus}`, `fuelType: ${this.fuelType}`);
    }
    go() {
        if (this.isStorageOpen === false) {
            this.speed += 5;
        }
        else {
            this.tankMessage = "You tried moving the tank but the storage is open!";
            console.log(this.tankMessage);
        }
        if (this.speed > 200) {
            this.speed = 200;
            this.tankMessage = "The tank is already at its maximum speed";
            console.log(this.tankMessage);
        }
        //console.log(`Speed: ${this.speed}`);
        this.updateMovingStatus();
    }
    break() {
        this.speed -= 5;
        if (this.speed < 0) {
            this.speed = 0;
            this.tankMessage = "The tank is already stopped, There is no purpose on using the break!";
            console.log("🚀 ~ Tank ~ break ~ tankMessage:", this.tankMessage);
        }
        this.updateMovingStatus();
    }
    updateMovingStatus() {
        this.movingStatus = this.speed > 0 ? "moving" : "stopped";
        console.log(this.movingStatus);
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
}

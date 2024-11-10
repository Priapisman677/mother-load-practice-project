;
export class Tank {
    constructor(tankDetails) {
        this.speed = 0;
        //! probably i could set this to always be initialized as false But I will never risk it until later:
        this.isStorageOpen = false;
        this.tankMessage = "";
        this.drill = tankDetails.drill;
        this.engine = tankDetails.engine;
        this.fuelType = tankDetails.fuelType;
        this.speed = tankDetails.speed;
        this.isStorageOpen = tankDetails.isStorageOpen;
        this.movingStatus = tankDetails.movingStatus;
        this.id = tankDetails.id;
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
        }
        if (this.speed > 200) {
            this.speed = 200;
            this.tankMessage = "The tank is already at its maximum speed";
        }
        //console.log(`Speed: ${this.speed}`);
        this.updateMovingStatus();
    }
    break() {
        this.speed -= 5;
        if (this.speed < 0) {
            this.speed = 0;
            this.tankMessage = "The tank is already stopped, There is no purpose on using the break!";
        }
        this.updateMovingStatus();
    }
    updateMovingStatus() {
        this.movingStatus = this.speed > 0 ? "moving" : "stopped";
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

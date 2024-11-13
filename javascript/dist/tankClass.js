export class Tank {
    constructor(tankDetails) {
        this.speed = 0;
        this.isStorageOpen = false;
        this.tankMessage = "";
        this.drill = tankDetails.drill;
        this.engine = tankDetails.engine;
        this.id = tankDetails.id;
        this.fuelType = tankDetails.fuelType;
        const storedTank = JSON.parse(localStorage.getItem(this.id));
        this.fuelCapacity = storedTank
            ? storedTank.fuelCapacity
            : tankDetails.fuelType.fuelCapacity;
        this.speed = tankDetails.speed;
        this.isStorageOpen = tankDetails.isStorageOpen;
        this.movingStatus = tankDetails.movingStatus;
    }
    displayInfo() {
        console.log(`drill: ${this.drill.name}, engine: ${this.engine.name}, speed: ${this.speed}km/h, ${this.isStorageOpen === true ? "Storage is open" : "Storage is closed"}`, `movingStatus: ${this.movingStatus}`, `fuelType: ${this.fuelType}`);
    }
    go() {
        if (this.isStorageOpen === false && this.fuelCapacity > 0) {
            if (this.speed < this.engine.speedLimit) {
                this.fuelCapacity -= 10;
            }
            this.speed += 5 * this.engine.speedMultiplier;
        }
        else if (this.isStorageOpen === true && this.fuelCapacity <= 0) {
            this.tankMessage =
                "You tried moving the tank but the storage is open and there is no fuel!";
        }
        else if (this.isStorageOpen === false && this.fuelCapacity <= 0) {
            this.tankMessage = "You tried moving the tank but there is no fuel!";
        }
        else if (this.isStorageOpen === true && this.fuelCapacity > 0) {
            this.tankMessage =
                "You tried moving the tank but but the storage is open!";
        }
        if (this.speed > this.engine.speedLimit) {
            this.speed = this.engine.speedLimit;
            this.tankMessage = "The tank is already at its maximum speed";
        }
        this.checkFuelCapacity();
        this.updateMovingStatus();
    }
    break() {
        this.speed -= 5 * this.engine.breakMultiplier;
        if (this.speed < 0) {
            this.speed = 0;
            this.tankMessage =
                "The tank is already stopped, There is no purpose on using the break!";
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
            this.tankMessage =
                "You tried opening the storage while the tank is moving!";
        }
    }
    closeStorage() {
        if (this.isStorageOpen === false) {
            this.tankMessage = "Storage is already closed!";
        }
        else {
            this.isStorageOpen = false;
        }
    }
    reFillFuel() {
        if (this.fuelCapacity === this.fuelType.fuelCapacity) {
            this.tankMessage = 'The fuel is already at its maximum!';
        }
        else if (this.speed === 0) {
            this.fuelCapacity = this.fuelType.fuelCapacity;
        }
        else {
            this.tankMessage = "You need to be stopped in order to refill your fuel!";
        }
    }
    updateMovingStatus() {
        this.movingStatus = this.speed > 0 ? "moving" : "stopped";
    }
    checkFuelCapacity() {
        if (this.fuelCapacity <= 0) {
            this.speed = 0;
            this.tankMessage = 'The tank has stopped due to lack of fuel!';
            this.updateMovingStatus();
        }
    }
    returnImageHTML() {
        return '';
    }
}
//* Tier 1 tank class----------------------------------------
export class Tier1Tank extends Tank {
}
//* Tier 2 tank class----------------------------------------
export class Tier2Tank extends Tank {
    constructor(tankDetails) {
        super(tankDetails);
        this.reserveFuel = tankDetails.reserveFuel;
    }
    returnImageHTML() {
        return `
      <div class="image-container">
        <img class="item-image" src="../../images/${this.reserveFuel.name}-reserveFuel.PNG">
      </div>
    `;
    }
}
//* Tier 3 tank class----------------------------------------
export class Tier3Tank extends Tier2Tank {
}
// test1(){
//   console.log('This is the test() function: This should only work for Tier 1 tank')
// }

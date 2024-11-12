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
    constructor() {
        super(...arguments);
        this.test = 'test';
    }
    test1() {
        // super.go()
        console.log('This is the test() function: This should only work for Tier 1 tank');
        // return '1.-This function does not exist on the parent class (1)'
    }
    go() {
        super.go();
        // console.log('Tier2Tank go')
    }
}
//* Tier 2 tank class----------------------------------------
export class Tier2Tank extends Tank {
    constructor() {
        super(...arguments);
        this.test = 'test';
    }
    test1() {
        // super.go()
        console.log('This is the test() function: This should only work for Tier 2 tank');
        // return '2.-This function does not exist on the parent class (2)' 
    }
    go() {
        super.go();
        // console.log('Tier2Tank go')
    }
}
//* Tier 2 tank class----------------------------------------
export class Tier3Tank extends Tank {
    constructor() {
        super(...arguments);
        this.test = 'test';
    }
    test1() {
        // super.go()
        console.log('This is the test() function: This should only work for Tier 3 tank');
        // return '3.-This function does not exist on the parent class (3)' 
    }
    go() {
        super.go();
        // console.log('Tier2Tank go')
    }
}

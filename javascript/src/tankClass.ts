import { Engine, Drill, FuelType, ReserveFuel } from "./itemsList.js";



interface TankDetails {
  drill: Drill;
  engine: Engine;
  fuelType: FuelType;
  speed: number;
  isStorageOpen: boolean;
  movingStatus: string;
  id: string;

  questionMarkIsUsedToIndicateUncertainty?: string;
  reserveFuel?:ReserveFuel;
}

export class Tank {
  
  drill: Drill;
  engine: Engine;
  fuelType: FuelType;
  speed: number = 0;
  isStorageOpen: boolean = false;
  movingStatus: string;
  tankMessage: string = "";
  id: string;
  fuelCapacity: number;

  constructor(tankDetails: TankDetails) {
    
    this.drill = tankDetails.drill;
    this.engine = tankDetails.engine;
    this.id = tankDetails.id;
    this.fuelType = tankDetails.fuelType;

    const storedTank: Tank = JSON.parse(
      localStorage.getItem(this.id) as string
    ) as Tank;
    this.fuelCapacity = storedTank
      ? storedTank.fuelCapacity
      : tankDetails.fuelType.fuelCapacity;

    this.speed = tankDetails.speed;
    this.isStorageOpen = tankDetails.isStorageOpen;
    this.movingStatus = tankDetails.movingStatus;
  }

  displayInfo(): void {
    console.log(
      `drill: ${this.drill.name}, engine: ${this.engine.name}, speed: ${
        this.speed
      }km/h, ${
        this.isStorageOpen === true ? "Storage is open" : "Storage is closed"
      }`,
      `movingStatus: ${this.movingStatus}`,
      `fuelType: ${this.fuelType}`
    );
  }
  go(): void {
    if (this.isStorageOpen === false && this.fuelCapacity > 0) {
      if(this.speed < this.engine.speedLimit){
        this.fuelCapacity -= 10;
      }
      this.speed += 5 * this.engine.speedMultiplier;
      
      
    } else if (this.isStorageOpen === true && this.fuelCapacity <= 0) {
      this.tankMessage =
        "You tried moving the tank but the storage is open and there is no fuel!";
    } else if (this.isStorageOpen === false && this.fuelCapacity <= 0) {
      this.tankMessage = "You tried moving the tank but there is no fuel!";
    } else if (this.isStorageOpen === true && this.fuelCapacity > 0) {
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

  break(): void {
    this.speed -= 5 * this.engine.breakMultiplier;
    if (this.speed < 0) {
      this.speed = 0;
      this.tankMessage =
        "The tank is already stopped, There is no purpose on using the break!";
    }
    this.updateMovingStatus();
  }
  openStorage(): void {
    if (this.isStorageOpen === true) {
      this.tankMessage = "storage is already open!";
    }
    if (this.speed === 0) {
      this.isStorageOpen = true;
    } else {
      this.tankMessage =
        "You tried opening the storage while the tank is moving!";
    }
  }

  closeStorage(): void {
    if (this.isStorageOpen === false) {
      this.tankMessage = "Storage is already closed!";
    } else {
      this.isStorageOpen = false;
    }
  }
  reFillFuel() {
    if(this.fuelCapacity === this.fuelType.fuelCapacity){
      this.tankMessage = 'The fuel is already at its maximum!'
  }
    else if (this.speed === 0) {
      this.fuelCapacity = this.fuelType.fuelCapacity;
    } else {
      this.tankMessage = "You need to be stopped in order to refill your fuel!";
    }
    
  }

  updateMovingStatus(): void {
    this.movingStatus = this.speed > 0 ? "moving" : "stopped";
  }

  checkFuelCapacity(){
    if(this.fuelCapacity <= 0){
      this.speed = 0;
      this.tankMessage = 'The tank has stopped due to lack of fuel!'
      this.updateMovingStatus()
    }
  }
  returnImageHTML(){
    return '';
  }
}

//* Tier 1 tank class----------------------------------------
export class Tier1Tank extends Tank {

}
//* Tier 2 tank class----------------------------------------
export class Tier2Tank extends Tank {
  reserveFuel:ReserveFuel;
  constructor(tankDetails: TankDetails){
    super(tankDetails)
    this.reserveFuel = tankDetails.reserveFuel as ReserveFuel
    
  }
  returnImageHTML(){
    return `
      <div class="image-container">
        <img class="item-image" src="../../images/${
          this.reserveFuel.name as string
        }-reserveFuel.PNG">
      </div>
    `;
  }
}
//* Tier 3 tank class----------------------------------------
export class Tier3Tank extends Tier2Tank {
    //$ I just realised that a subclass can inherit from another subclass in this case this subclass inherits from Tier2Tank
}



// test1(){
//   console.log('This is the test() function: This should only work for Tier 1 tank')
// }

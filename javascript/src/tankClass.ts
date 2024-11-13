import { Engine, Drill, FuelType, gasFuelType } from './itemsList.js'

interface TankDetails {
  drill: Drill;
  engine: Engine;
  fuelType: FuelType;
  speed: number;
  isStorageOpen: boolean;
  movingStatus: string;
  id: string;


  questionMarkIsUsedToIndicateUncertainty?: string;
}

;
//!I need to change the name of this tank class:
export class Tank {
  drill: Drill;
  engine: Engine;
  fuelType: FuelType;
  speed: number = 0;
  isStorageOpen: boolean = false
  movingStatus: string
  tankMessage: string = "";
  id : string;
  fuelCapacity: number;

  constructor(tankDetails: TankDetails) {
    this.drill = tankDetails.drill;
    this.engine = tankDetails.engine;
    
    this.fuelType = tankDetails.fuelType;
    this.fuelCapacity = tankDetails.fuelType.fuelCapacity;

    this.speed = tankDetails.speed;
    this.isStorageOpen = tankDetails.isStorageOpen;
    this.movingStatus = tankDetails.movingStatus;
    this.id = tankDetails.id;
  
  }
  displayInfo(): void {
    console.log(
      `drill: ${this.drill.name}, engine: ${this.engine.name}, speed: ${
        this.speed
      }km/h, ${
        this.isStorageOpen === true ? "Storage is open" : "Storage is closed"
      }`, `movingStatus: ${this.movingStatus}`,  `fuelType: ${this.fuelType}`
    );
  }
   go(): void {
    if (this.isStorageOpen === false {
      this.speed += (5 * this.engine.speedMultiplier);
    } else {
      this.tankMessage = "You tried moving the tank but the storage is open!";
    }
    if (this.speed > this.engine.speedLimit) {
      this.speed = this.engine.speedLimit;
      this.tankMessage = "The tank is already at its maximum speed";
    }
    this.updateMovingStatus();
    
    //$ (this.fuelType.fuelCapacity) -= 1; This line was modifying the original object.
    this.fuelCapacity -= 1;
    // console.log("Current capacity of this current tank:", this.fuelCapacity)
    // console.log('The capacity of the original object ',gasFuelType.fuelCapacity);
  }
    

  break(): void {
    this.speed -= (5 * this.engine.breakMultiplier);
    if (this.speed < 0) {
      this.speed = 0;
      this.tankMessage = "The tank is already stopped, There is no purpose on using the break!"; 
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
      this.tankMessage = "You tried opening the storage while the tank is moving!";
    }
 
  }

  closeStorage(): void {
    if (this.isStorageOpen === false) {
      this.tankMessage = "Storage is already closed!";
    }
    if (this.speed === 0) {
      this.isStorageOpen = false;
    }
  }
  updateMovingStatus(): void {
    this.movingStatus = this.speed > 0 ? "moving" : "stopped";
  }
}


//* Tier 1 tank class----------------------------------------
export class Tier1Tank extends Tank{
  // speedMultiplier: number = 1
  // breakMultiplier: number = 1
  // speedLimit: number = 200;
  // go(): void{
  //   super.go(this.speedMultiplier as number, this.speedLimit as number)
  //   console.log('engine test: ',this.engine)
  // }
  // break(): void {
  //   super.break(this.breakMultiplier as number)
  //   // console.log('This is the break() function: This should only work for Tier 1 tank')
  // }
}
//* Tier 2 tank class----------------------------------------
export class Tier2Tank extends Tank{
  // speedMultiplier: number = 2
  // breakMultiplier: number = 2
  // speedLimit: number = 300;
  // go(): void{
  //   super.go(this.speedMultiplier as number, this.speedLimit as number)
  // }
  // break(): void {
  //   super.break(this.breakMultiplier)
  //   // console.log('This is the break() function: This should only work for Tier 2 tank')
  // }
}
//* Tier 3 tank class----------------------------------------
export class Tier3Tank extends Tank{
  // speedMultiplier: number = 3
  // breakMultiplier: number = 3
  // speedLimit: number = 400;
  // go(): void{
  //   super.go(this.speedMultiplier as number, this.speedLimit as number)
  // }
  // break(): void {
  //   super.break(this.breakMultiplier as number)
  //   // console.log('This is the break() function: This should only work for Tier 3 tank')
  // }
}


  // test1(){
  //   console.log('This is the test() function: This should only work for Tier 1 tank')
  // }


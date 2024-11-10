interface TankDetails {
  drill: string;
  engine: string;
  fuelType: string;
  speed: number;
  isStorageOpen: boolean;
  movingStatus: string;
  id: number;
}

;

export class Tank {
  drill: string;
  engine: string;
  fuelType: string;
  speed: number = 0;
  isStorageOpen: boolean = false;
  movingStatus: string = "stopped";
  tankMessage: string = "";
  id : number = 0

  constructor(tankDetails: TankDetails) {
    this.drill = tankDetails.drill;
    this.engine = tankDetails.engine;
    this.fuelType = tankDetails.fuelType;
    this.speed = tankDetails.speed;
    this.isStorageOpen = tankDetails.isStorageOpen;
    this.movingStatus = tankDetails.movingStatus;
    this.id = tankDetails.id;
  }
  displayInfo(): void {
    console.log(
      `drill: ${this.drill}, engine: ${this.engine}, speed: ${
        this.speed
      }km/h, ${
        this.isStorageOpen === true ? "Storage is open" : "Storage is closed"
      }`, `movingStatus: ${this.movingStatus}`,  `fuelType: ${this.fuelType}`
    );
  }
  go(): void {
    if (this.isStorageOpen === false) {
      this.speed += 5;
    } else {
      this.tankMessage = "You tried moving the tank but the storage is open!";
    }
    if (this.speed > 200) {
      this.speed = 200;
      this.tankMessage = "The tank is already at its maximum speed";
    }
    //console.log(`Speed: ${this.speed}`);
    this.updateMovingStatus();
  }

  break(): void {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
      this.tankMessage = "The tank is already stopped, There is no purpose on using the break!"; 
    }
    this.updateMovingStatus();
  }
  updateMovingStatus(): void {
    this.movingStatus = this.speed > 0 ? "moving" : "stopped";
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
}

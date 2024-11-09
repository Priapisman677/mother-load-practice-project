interface TankDetails {
  drill: string;
  engine: string;
  fuelType: string;
}

class Tank {
  drill: string;
  engine: string;
  fuelType: string;
  speed: number = 0;
  isStorageOpen: boolean = false;
  movingStatus: string = "stopped";

  constructor(tankDetails: TankDetails) {
    this.drill = tankDetails.drill;
    this.engine = tankDetails.engine;
    this.fuelType = tankDetails.fuelType;
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
      console.log("You tried moving the tank but the storage is open!");
      //* */ message = 'You tried moving the tank but the storage is open!'
    }
    if (this.speed > 200) {
      this.speed = 200;
      console.log("The tank is already at its maximum speed");
    }
    //console.log(`Speed: ${this.speed}`);
    this.updateMovingStatus();
  }

  break(): void {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
      console.log(
        "The tank is fully stopped, there is no purpose on using the break!"
      );
    }
    this.updateMovingStatus();
  }
  updateMovingStatus(): void {
    this.movingStatus = this.speed > 0 ? "moving" : "stopped";
    console.log(this.movingStatus);
  }
  openStorage(): void {
    if (this.isStorageOpen === true) {
      console.log("storage is already open!");
    }
    if (this.speed === 0) {
      this.isStorageOpen = true;
    } else {
      console.log("You tried opening the storage but the car is moving!");
    }
  }

  closeStorage(): void {
    if (this.isStorageOpen === false) {
      console.log("storage is already closed!");
    }
    if (this.speed === 0) {
      this.isStorageOpen = false;
    }
  }
}

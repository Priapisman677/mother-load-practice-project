import { Engine, Drill, FuelType, ReserveFuel,FanType} from "./itemsList.js";



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
  fan?: FanType;
  height?: number;
}

export class Tank {
  
  drill: Drill;
  engine: Engine;

  fuelType: FuelType;
  fuelCapacity: number;

  speed: number = 0;
  isStorageOpen: boolean = false;
  movingStatus: string;
  tankMessage: string = "";
  id: string;
  

  constructor(tankDetails: TankDetails) {

    this.id = tankDetails.id;
    this.drill = tankDetails.drill;
    this.engine = tankDetails.engine;

    //$Notice that the way I did it so that I didn't alter the original value for fuel capacity was to declare 2 things: this.fuelType = tankDetails.fuelType; and this.fuelCapacity
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
  reserveFuelImage(){
    return '';
  }
  reserveFuelButton(){
    return '';
  }
  useReserveFuel(){

  }
  fly(){
    return '' as string
  }
}

//* Tier 1 tank class----------------------------------------
export class Tier1Tank extends Tank {

}
//* Tier 2 tank class----------------------------------------
export class Tier2Tank extends Tank {
  reserveFuel:ReserveFuel;
  initialAndMaxCount: number;
  constructor(tankDetails: TankDetails){
    super(tankDetails)
    //! Be careful because if we needed to modify the variable below we wouldn't modify also the variable in the original object
    this.reserveFuel = tankDetails.reserveFuel as ReserveFuel
    const storedTank: Tier2Tank = JSON.parse(localStorage.getItem(this.id) as string) as Tier2Tank
    this.initialAndMaxCount = storedTank
    ? storedTank.initialAndMaxCount
    :this.reserveFuel.initialAndMaxCount;
    //$ I didn't know we were able to call the own object just to check how it looks like once created the instance:
  }
  reserveFuelImage(){
    return `
      <div class="image-container">
        <p class="reserve-fuel-tanks">${this.initialAndMaxCount}<p>
        <img class="item-image" src="../../images/${
          this.reserveFuel.name as string
        }-reserveFuel.PNG">
      </div>
    `;
  }
  reserveFuelButton(){
    return `
      <div class="button-container">
        <button class="reserve-fuel-button"
        data-tank-id="${this.id}">
        Use reserve fuel
        </button>
      </div>
    `;
  }
  useReserveFuel(){
    if(this.fuelCapacity !== this.fuelType.fuelCapacity && this.initialAndMaxCount > 0){
      this.fuelCapacity += this.reserveFuel.fuelRestoration;
      //!I believe down here I should leave it as "this.initialAndMaxCount" If I don't want to modify the original object.
      //$ Update: I did leave it as "this.initialAndMaxCount" instead of "this.reserveFuel.initialAndMaxCount" since the latest why is modifying the original object
      this.initialAndMaxCount -= 1;
    }else{
      if(this.fuelCapacity === this.fuelType.fuelCapacity){
       this.tankMessage= 'The fuel is already at its maximum!'

      }
      if(this.initialAndMaxCount === 0){
        this.tankMessage= 'You ran out of reserve fuel!'
      }
    }
    if(this.fuelCapacity > this.fuelType.fuelCapacity){
      this.fuelCapacity = this.fuelType.fuelCapacity
    }
  }

}
//* Tier 3 tank class----------------------------------------
export class Tier3Tank extends Tier2Tank {
  //$ I just realised that a subclass can inherit from another subclass in this case this subclass inherits from Tier2Tank
  fan: FanType;
  height: number;
  

  constructor(tankDetails: TankDetails){
    super(tankDetails)
    this.fan = tankDetails.fan as FanType
    
    this.height = this.fan.heightLimit;
    console.log('test1:',this.height)
  }
  fly(){
    return `
      <div class="button-container">
        <button class="fly-button"
        data-tank-id="${this.id}">
        Fly
        </button>
      </div>
    `;
  }
    
}

// console.log(t2tank);
// console.log(t3tank)

// test1(){
//   console.log('This is the test() function: This should only work for Tier 1 tank')
// }

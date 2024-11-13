//*ENGINE INTERFACE-----------------------------------------
export interface Engine {
  name: string;
  speedMultiplier: number;
  speedLimit: number;
  breakMultiplier: number;
  //! I don't know if I should give all of them an engin or just use the name property to load the image
  image?: string;
}

export const turboDynamoEngine: Engine = {
  name: "turboDynamo",
  speedMultiplier: 1,
  speedLimit: 75,
  breakMultiplier: 1,
};

export const fusionCoreEngine: Engine = {
  name: "fusionCore",
  speedMultiplier: 2,
  speedLimit: 150,
  breakMultiplier: 2,
};

export const quantumDriveEngine: Engine = {
  name: "quantumDrive",
  speedMultiplier: 3,

  //! I need to modify the number below so that it is divisible by 15.
  speedLimit: 225,
  breakMultiplier: 3,
};

//*DRILL INTERFACE-----------------------------------------
export interface Drill {
  name: string;
}

export const silverDrill: Drill = {
  name: "silver",
};
export const rubyDrill: Drill = {
  name: "ruby",
};
export const amazoniteDrill: Drill = {
  name: "amazonite",
};

//*FUEL TYPE INTERFACE-----------------------------------------
export interface FuelType {
  name: string;
  fuelCapacity: number;
}

export const gasFuelType: FuelType = {
  name: "gas",
  fuelCapacity: 150,
  //$The fuel capacity for this to reach maximum Speed 1 time should be 150
};
export const uraniumFuelType: FuelType = {
  name: "uranium",
  fuelCapacity: 300,
  //$The fuel capacity for this to reach maximum Speed 2 times should be 300
};
export const antimaterFuelType: FuelType = {
  name: "antimater",
  fuelCapacity: 450,
  //$The fuel capacity for this to reach maximum Speed 2 times should be 450
};


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
  speedLimit: 200,
  breakMultiplier: 1,
};

export const fusionCoreEngine: Engine = {
  name: "fusionCore",
  speedMultiplier: 2,
  speedLimit: 300,
  breakMultiplier: 2,
};

export const quantumDriveEngine: Engine = {
  name: "quantumDrive",
  speedMultiplier: 3,
  speedLimit: 400,
  breakMultiplier: 3,
};

//*DRILL INTERFACE-----------------------------------------
export interface Drill{
  name: string;
}

export const silverDrill: Drill = {
  name: 'silver',
}
export const rubyDrill: Drill = {
  name: 'ruby',
}
export const amazoniteDrill: Drill = {
  name: 'amazonite',
}

//*FUEL TYPE INTERFACE-----------------------------------------
export interface FuelType{
  name: string;
}

export const gasFuelType: FuelType ={
  name: 'gas'
}
export const uraniumFuelType: FuelType ={
  name: 'uranium'
}
export const antimaterFuelType: FuelType ={
  name: 'antimater'
}
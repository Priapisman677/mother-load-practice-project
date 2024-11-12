interface engine {
  name: string;
  speedMultiplier: number;
  speedLimit: number;
}

 export const turboDynamoEngine: engine = {
  name: 'turboDynamo',
  speedMultiplier: 1,
  speedLimit: 200
}

export const fusionCoreEngine: engine = {
  name: 'fusionCore',
  speedMultiplier: 3,
  speedLimit: 300
}

export const quantumDriveEngine: engine = {
  name: 'quantumDrive',
  speedMultiplier: 3,
  speedLimit: 400
}
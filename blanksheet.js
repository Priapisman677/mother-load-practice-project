//$ Hello!

// Class representing the tank vehicle functionality.
class Tank {
  displayInfo(): void {
    console.log(
      `Drill: ${this.drill.name}, Engine: ${this.engine.name}, Speed: ${this.speed} km/h, ${this.isStorageOpen ? "Storage is open" : "Storage is closed"}`,
      `Moving Status: ${this.movingStatus}`,
      `Fuel Type: ${this.fuelType}`
    );
  }

  go(): void {
    if (this.canMove()) {
      this.consumeFuel();
      this.accelerate();
    } else {
      this.handleMovementErrors();
    }
    this.updateMovingStatus();
  }

  break(): void {
    this.reduceSpeed();
    this.updateMovingStatus();
  }

  openStorage(): void {
    if (this.isStorageOpen) {
      this.tankMessage = "Storage is already open!";
    } else if (this.speed === 0) {
      this.isStorageOpen = true;
      this.tankMessage = "Storage opened successfully.";
    } else {
      this.tankMessage = "Cannot open storage while tank is moving!";
    }
  }

  closeStorage(): void {
    if (!this.isStorageOpen) {
      this.tankMessage = "Storage is already closed!";
    } else {
      this.isStorageOpen = false;
      this.tankMessage = "Storage closed successfully.";
    }
  }

  reFillFuel(): void {
    if (this.fuelCapacity === this.fuelType.fuelCapacity) {
      this.tankMessage = "Fuel is already at maximum capacity!";
    } else if (this.speed === 0) {
      this.fuelCapacity = this.fuelType.fuelCapacity;
      this.tankMessage = "Fuel refilled successfully.";
    } else {
      this.tankMessage = "Tank must be stopped to refuel!";
    }
  }

  // Helper method to check if the tank can move.
  private canMove(): boolean {
    return !this.isStorageOpen && this.fuelCapacity > 0;
  }

  // Helper method to handle fuel consumption while moving.
  private consumeFuel(): void {
    if (this.speed < this.engine.speedLimit) {
      this.fuelCapacity -= 10;
    }
  }

  // Helper method to handle tank acceleration.
  private accelerate(): void {
    this.speed += 5 * this.engine.speedMultiplier;
    if (this.speed > this.engine.speedLimit) {
      this.speed = this.engine.speedLimit;
      this.tankMessage = "The tank has reached its maximum speed.";
    }
  }

  // Helper method to handle errors during movement.
  private handleMovementErrors(): void {
    if (this.isStorageOpen) {
      this.tankMessage = this.fuelCapacity > 0 ? "Cannot move with storage open!" : "Cannot move; storage is open and fuel is empty!";
    } else {
      this.tankMessage = "Cannot move; fuel is empty!";
    }
  }

  // Helper method to reduce speed when breaking.
  private reduceSpeed(): void {
    this.speed -= 5 * this.engine.breakMultiplier;
    if (this.speed < 0) {
      this.speed = 0;
      this.tankMessage = "The tank is already stopped; braking has no effect!";
    }
  }

  // Helper method to update moving status.
  private updateMovingStatus(): void {
    this.movingStatus = this.speed > 0 ? "moving" : "stopped";
  }
}

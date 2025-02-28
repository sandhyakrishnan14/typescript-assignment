enum CarStatus {
    Ready,
    InService,
    OutOfService
}

type DriverProfile = [number, string, CarStatus];

const driverProfile: DriverProfile = [1, "Jane Smith", CarStatus.Ready];

console.log(driverProfile);
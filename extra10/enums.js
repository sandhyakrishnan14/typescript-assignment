"use strict";
var CarStatus;
(function (CarStatus) {
    CarStatus[CarStatus["Ready"] = 0] = "Ready";
    CarStatus[CarStatus["InService"] = 1] = "InService";
    CarStatus[CarStatus["OutOfService"] = 2] = "OutOfService";
})(CarStatus || (CarStatus = {}));
const driverProfile = [1, "Jane Smith", CarStatus.Ready];
console.log(driverProfile);

"use strict";
async function getWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const temperatures = {
                "New York": 25,
                "London": 18
            };
            if (temperatures[city] !== undefined) {
                resolve(temperatures[city]);
            }
            else {
                reject(new Error("City not found"));
            }
        }, 2000);
    });
}
async function fum() {
    try {
        const newYorkWeather = await getWeather("New York");
        console.log(`The temperature in New York is ${newYorkWeather}°C`);
        const londonWeather = await getWeather("London");
        console.log(`The temperature in London is ${londonWeather}°C`);
    }
    catch (error) {
        console.error();
    }
}
fum();

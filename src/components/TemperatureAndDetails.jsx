import React from "react";
import { UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";

function TemperatureAndDetails({
  weather: { humidity, temperature, temperatureApparent, windSpeed },
}) {
  return (
    <div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <p className="text-5xl">{`${temperature.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${temperatureApparent.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${windSpeed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;

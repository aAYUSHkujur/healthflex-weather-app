import React from "react";
import { formatToLocalTime } from "../services/WeatherService";

function TimeAndLocation({ weather: { time, name } }) {
  return (
    <div>
      <div className="flex item-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(time)}
        </p>
      </div>
      <div className="flex item-center justify-center my-3">
        <p className="text-white text-3xl font-light">{`${name}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;

import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex item-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Thursday, 30 Mar 2024 | Local time: 16:13 PM
        </p>
      </div>
      <div className="flex item-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Berlin, DE</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;

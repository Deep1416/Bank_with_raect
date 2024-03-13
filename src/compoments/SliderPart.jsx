import React from "react";
import Slider from "@mui/material/Slider";
function SliderPart({
  name,
  minAmount,
  maxAmount,
  defaultValue,
  maxValue,
  minValue,
  setp,
  symbol,
  id,
  value,
  rate,
}) {
  // console.log(maxValue);
  return (
    <div>
      <div className="mb-1">
        <h2 className="mb-3">{name}</h2>
        <h3 className="text-2xl font-semibold">
          {symbol}
          {value}
        </h3>
      </div>

      <Slider
        aria-label="Small steps"
        defaultValue={value}
        // getAriaValueText={valuetext}
        step={setp}
        marks
        min={minValue}
        max={maxValue}
        value = {value}
        valueLabelDisplay="auto"
        onChange={(e) => rate(e.target.value)}
      />
      <div className="flex justify-between mb-7 text-sm">
        <p>{minAmount}</p>
        <p>{maxAmount}</p>
      </div>
    </div>
  );
}

export default SliderPart;

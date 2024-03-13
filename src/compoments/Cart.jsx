import React, { useEffect, useState } from "react";
import SliderPart from "./SliderPart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChartPie from "./ChartPie";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Cart() {
  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(0);
  const [loanamount, setLoanamount] = useState(0);
  const [intrest, setIntrest] = useState(5);
  const [year, setYear] = useState(5);

  const [chartData, setChartData] = useState({
    labels: ["Principle", "Interst"],
    datasets: [
      {
        label: "Users Gained ",
        data: [100, 101],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(()=>{
    setDownPayment(homeValue * 0.20);
  },[homeValue])

  useEffect(()=>{
    setLoanamount(homeValue - downPayment);
  },[downPayment])

  return (
    <div className="m-5 px-10 py-12">
      <div className="flex">
        <div className="w-1/2">
          <SliderPart
            name={"Home Value"}
            minAmount={"$ 1000"}
            maxAmount={"$ 10000"}
            defaultValue={3000}
            minValue={1000}
            maxValue={10000}
            setp={100}
            symbol={"$ "}
            id={"home"}
            value={homeValue}
            rate={setHomeValue}
          />
          <SliderPart
            name={"Down Payment"}
            minAmount={"$ 0"}
            maxAmount={homeValue}
            defaultValue={600}
            minValue={0}
            maxValue={homeValue}
            setp={100}
            symbol={"$ "}
            id={"down"}
            value={downPayment}
            rate={setDownPayment}
          />
          <SliderPart
            name={"Loan Amount"}
            minAmount={"$ 0"}
            maxAmount={homeValue}
            defaultValue={2400}
            minValue={0}
            maxValue={homeValue}
            setp={100}
            symbol={"$ "}
            id={"loan"}
            value={loanamount}
            rate={setLoanamount}
          />
          <SliderPart
            name={"Interest Rate"}
            minAmount={"% 2"}
            maxAmount={"% 18"}
            defaultValue={5}
            minValue={2}
            maxValue={18}
            setp={1}
            symbol={"% "}
            id={""}
            value={intrest}
            rate={setIntrest}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="year"
              onChange={(event) => setYear(event.target.value)}
            >
              <MenuItem value={5}>5 Year</MenuItem>
              <MenuItem value={10}>10 Year</MenuItem>
              <MenuItem value={15}>15 Year</MenuItem>
              <MenuItem value={20}>20 Year</MenuItem>
              <MenuItem value={25}>25 Year</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-1/2">
          <ChartPie chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Cart;

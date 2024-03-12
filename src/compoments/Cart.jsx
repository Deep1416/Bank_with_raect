import React, { useEffect, useState } from "react";
import SliderPart from "./SliderPart";
function Cart() {
  

  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(0);
  const [loanamount, setLoanamount] = useState(0);
  const [intrest, setIntrest] = useState(5);
  const [year, setYear] = useState(5);

  useEffect(()=>{
    setDownPayment(()=>homeValue*0.2)
    setLoanamount(()=>homeValue*0.8)
    // console.log("home value compo");
  },[])

  function changehandlre(id ,value){
    console.log(id ,value);
    if(id == "down"){
      console.log(loanamount,downPayment);
      setDownPayment(()=>value)
      setLoanamount(()=>homeValue-downPayment)
      
    }
      if(id == "loan"){
        setLoanamount(()=>value)
      setDownPayment(()=>homeValue-loanamount)
    }
    if(id=='home'){
      setHomeValue(()=>value)
    }
  }

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
            changehandlre = {changehandlre}
            symbol={"$ "}
            id={"home"}
            value = {homeValue}
            rate= {setHomeValue}
          />
          <SliderPart
            name={"Down Payment"}
            minAmount={"$ 0"}
            maxAmount={"$ 3000"}
            defaultValue={600}
            minValue={0}
            maxValue={3000}
            setp={100}
            symbol={"$ "}
            id={"down"}
            changehandlre = {changehandlre}
            value ={downPayment}
            rate= {setDownPayment}
          />
          <SliderPart
            name={"Loan Amount"}
            minAmount={"$ 0"}
            maxAmount={"$ 3000"}
            defaultValue={2400}
            minValue={0}
            maxValue={3000}
            setp={100}
            symbol={"$ "}
            id={"loan"}
            changehandlre = {changehandlre}
            value = {loanamount}
            rate= {setLoanamount}
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
            changehandlre = {changehandlre}
            value = {intrest}
            rate = {setIntrest}
          />
           {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="year"
            onChange={(event)=>setYear(event.target.value)}
          >
            <MenuItem value={5}>5 Year</MenuItem>
            <MenuItem value={10}>10 Year</MenuItem>
            <MenuItem value={15}>15 Year</MenuItem>
            <MenuItem value={20}>20 Year</MenuItem>
            <MenuItem value={25}>25 Year</MenuItem>
          </Select>
        </FormControl> */}
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}

export default Cart;

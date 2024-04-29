import React, { useEffect, useState } from "react";

const BMI = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const reload = () => {
    window.location.reload();
  };

  const calculateBMI = () => {
    let bmi = (weight / (height * height)) * 10000;
    setBmi(bmi.toFixed(2));
    if (bmi < 18.5) {
      setMsg("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMsg("Normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMsg("Overweight");
    } else if (bmi >= 30) {
      setMsg("Obese");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div
        style={{
          boxShadow: "0px 0px 15px 10px #2fcdb533",
          backgroundColor: "rgb(28, 28, 28)",
        }}
        className="w-[300px] md:w-[30%] h-[80vh]"
      >
        <h1 className="p-2 text-center text-[30px]">BMI Calculator</h1>

        <form onSubmit={calculateBMI}>
          <div>
            <label className="text-[22px] pl-[30px]">Age:</label>
            <br />
            <input
              className="w-[80%] h-[30px] ml-[33px] mt-[12px] text-[#333]"
              type="number"
              placeholder="Age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[22px] pl-[30px]">Weight:</label>
            <br />
            <input
              className="w-[80%] h-[30px] ml-[33px] mt-[12px] text-[#333]"
              type="number"
              placeholder="Weight..."
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[22px] pl-[30px]">Height:</label>
            <br />
            <input
              className="w-[80%] h-[30px] ml-[33px] mt-[12px] text-[#333]"
              type="number"
              placeholder="Height..."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button
              style={{ backgroundColor: "rgb(39,37,37)" }}
              className="w-[25%] text-[1.2rem] mt-[20px] ml-[50px] p-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
            <button
              style={{ backgroundColor: "rgb(39,37,37)" }}
              className="w-[25%] text-[1.2rem] mt-[20px] ml-[70px] p-2 rounded-md"
              type="submit"
              onClick={reload}
            >
              Reload
            </button>
          </div>

          <div className="mt-[10px] ml-[30px] text-[20px]">
            <h3>Age: {age}</h3>
            <h3>Your BMI is: {bmi}</h3>
            <p>{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BMI;

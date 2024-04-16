import "./styles.css";

import { useState } from "react";

function App() {

  return (
    <div className="max-w-lg mx-auto my-10">
      <RobotList />
    </div>
  );
}

const RobotList = () => {
  const [robotList, setRobotList] = useState([]);
  const [inputField, setInputField] = useState()

 

  const handleChange = (e) => {
    setInputField(e.target.value)
  }

  const addRobot = (e) => {

    e.preventDefault();
    setInputField("")

    
    if (inputField === "") {
      alert("Lütfen bir metin girin!");
      return;
    }

    if (robotList.some((robot) => robot === inputField)) {
      alert("Robot listede bulunuyor!");
      return;
    }

    setRobotList([...robotList, inputField]);
  };

  const removeRobot = (robotName) => {
    setRobotList(robotList.filter((robot) => robot !== robotName));
  };

  return (
    <>
    <div>
      <form className="flex flex-row gap-2" onSubmit={addRobot}>
        <input
          type="text"
          placeholder="Generate robot"
          className="p-2 border rounded-lg w-full"
          value={inputField}
          onChange={handleChange}
        />
        <button className=" bg-purple-600 text-white p-2 rounded-lg w-[100px]">
          Enter
        </button>
      </form>
    </div>
    <div className="flex items-center flex-wrap justify-between mt-5">
      {robotList.map((robot) => (
        <img
        src={`https://robohash.org/${robot}`}
        alt={`${robot}`}
        style={{ width: "200px", height: "200px", cursor: "pointer" }}
        onClick={() => removeRobot(robot)}
        key={robot}
        />
      ))}
    </div>
      </>
  );
};

export default App;

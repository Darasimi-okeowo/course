import React, { useState } from "react";
import "./App.css";

function App() {
  // const [count,setCount] = useState(0);
  // const [toggle, setToggle] = useState(false)
  const [data, setData] = useState({
    names: "",
    classNames: "",
    surname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((props) => ({
      ...props,
      [name]: value,
    }));
    console.log(data);
  };

  const handleClick = (e) => {
    // setCount((prev) => prev + 1)
    // setToggle(!toggle)
    e.preventDefault();
  console.log(data);
    setData({
      names: "",
      classNames: "",
      surname: ""
    });
  };
  return (
    <div className="App">
      {/* <p>{count}</p> */}
      {/* {toggle ? <h1>helllo</h1> : 'hhhgfhh'} */}
      <form onSubmit={handleClick}>
        <input
          placeholder="name"
          name="names"
          value={data.names}
          onChange={handleChange}
        />
        <input
          placeholder="class-name"
          name="classNames"
          value={data.classNames}
          onChange={handleChange}
        />
        <input
          placeholder="surname"
          name="surname"
          value={data.surname}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;

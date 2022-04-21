import React from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [items, setArray] = React.useState([]);
  // let items = [];

  function handleChanges(event) {
    // console.log(event.target);
    const { name, value } = event.target;
    setItem(value);
    // console.log(item);
  }

  function handleClick() {
    setArray((items) => [...items, item]);
    setItem("");
    // console.log(items);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChanges} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
          {items.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

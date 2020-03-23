import React from "react";
import "./styles.css";
import "./component/item";
import Item from "./component/item";

export default function App() {
  const trueArray = [];
  const falseArray = [];
  const itemArray = [
    {
      number: 1,
      title: "Shopping",
      date: new Date().toLocaleDateString(),
      status: false
    },
    {
      number: 2,
      title: "Laundry",
      date: new Date().toLocaleDateString(),
      status: true
    },
    {
      number: 3,
      title: "Reading",
      date: new Date().toLocaleDateString(),
      status: false
    },
    {
      number: 4,
      title: "Jogging",
      date: new Date().toLocaleDateString(),
      status: true
    },
    {
      number: 5,
      title: "Working",
      date: new Date().toLocaleDateString(),
      status: false
    }
  ];

  for (var i = 0; i < itemArray.length; i++) {
    if (itemArray[i].status === true) {
      trueArray.push(itemArray[i]);
    } else {
      falseArray.push(itemArray[i]);
    }
  }

  let trueArrayMap = trueArray.map((element, index) => {
    return (
      <Item
        number={element.number + " "}
        title={element.title + " "}
        date={element.date + " "}
        status={element.status}
      />
    );
  });

  let falseArrayMap = falseArray.map((element, index) => {
    return (
      <Item
        number={element.number + " "}
        title={element.title + " "}
        date={element.date + " "}
        status={element.status}
      />
    );
  });

  return (
    <div className="App">
      {trueArrayMap}
      <del>{falseArrayMap}</del>
    </div>
  );
}

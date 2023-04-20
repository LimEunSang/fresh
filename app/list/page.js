"use client";

import { useState } from "react";

const List = () => {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, set수량] = useState([0, 0, 0]);

  return (
    <>
      <h4 className="title">상품 목록</h4>
      {상품.map((item, key) => (
        <div className="food" key={key}>
          <img src={`/food${key}.png`} className="food-img" />
          <h4>{item} $40</h4>
          <button
            onClick={() => {
              let copy = [...수량];
              if (copy[key] > 0) copy[key]--;
              set수량(copy);
            }}
          >
            -
          </button>
          <span> {수량[key]} </span>
          <button
            onClick={() => {
              let copy = [...수량];
              copy[key]++;
              set수량(copy);
            }}
          >
            +
          </button>
        </div>
      ))}
    </>
  );
};

export default List;

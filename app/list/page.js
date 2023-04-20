"use client";

import { useState } from "react";

const List = () => {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, set수량] = useState(0);

  return (
    <>
      <h4 className="title">상품 목록</h4>
      {상품.map((item, key) => (
        <div className="food" key={key}>
          <img src={`/food${key}.png`} className="food-img" />
          <h4>{item} $40</h4>
          <span> {수량} </span>
          <button
            onClick={() => {
              set수량(수량 + 1);
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

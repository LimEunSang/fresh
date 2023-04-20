import Image from "next/image";
import food0 from "/public/food0.png";

const List = () => {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <>
      <h4 className="title">상품 목록</h4>
      {상품.map((item, key) => (
        <div className="food" key={key}>
          <img src={`/food${key}.png`} className="food-img" />
          <h4>{item} $40</h4>
        </div>
      ))}
    </>
  );
};

export default List;

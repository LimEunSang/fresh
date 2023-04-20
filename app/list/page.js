const List = () => {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <>
      <h4 className="title">상품 목록</h4>
      {상품.map((item) => (
        <div className="food" key={item}>
          <h4>{item} $40</h4>
        </div>
      ))}
    </>
  );
};

export default List;

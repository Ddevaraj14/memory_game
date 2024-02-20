const Card = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={item.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;

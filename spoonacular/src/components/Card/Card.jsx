import { useState } from "react";

export const Card = ({
  deleteCard,
  data: { _id, title, image, readyInMinutes, diets, pricePerServing, summary },
  data,
}) => {
  const [showMore, setShowMore] = useState(false);

  const limitString = (str) => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };

  return (
    <div className="card">
      <div className="close" onClick={() => deleteCard(_id)}>
        x
      </div>
      <h2>{title}</h2>
      <img href="" alt="">
        {image}
      </img>
      <h6>{readyInMinutes}</h6>
      <button type="diets">{diets}</button>
      <h5>{pricePerServing}</h5>
      {!showMore && <p>{limitString(summary).string}</p>}
      {showMore && (
        <>
          <p>{summary}</p>
          <button type="button" onClick={() => setShowMore(false)}>
            Ver Menos
          </button>
        </>
      )}
      {!showMore && limitString(summary).addButton && (
        <button type="button" onClick={() => setShowMore(true)}>
          Ver más
        </button>
      )}
    </div>
  );
};

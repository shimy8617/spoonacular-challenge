import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const MyList = (props) => {
  /* const [list, setList] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");
    console.log(favsInLocal);

    if (favsInLocal != null) {
      const favsArray = JSON.parse(favsInLocal);
      setList(favsArray);
    }
  }, []); */

  const [showMore, setShowMore] = useState(false);

  const limitString = (str) => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };

  return (
    <>
      <div className="row">
        {!props.list.length && <div>No recipes added to the list</div>}
        {props.list.map((oneRecipe, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{oneRecipe.title}</h5>
                  <img src={oneRecipe.imgURL} alt="" className="card-img-top" />
                  <button
                    className="add-btn"
                    onClick={props.addOrRemoveFromList}
                    data-recipe-id={oneRecipe.id}
                  >
                    +
                  </button>{/* 
                  {!showMore && <p>{limitString(oneRecipe.overview).string}</p>}
                  {showMore && (
                    <>
                      <p>{oneRecipe.summary}</p>
                      <button type="button" onClick={() => setShowMore(false)}>
                        Ver Menos
                      </button>
                    </>
                  )}
                  {!showMore && limitString(oneRecipe.overview).addButton && (
                    <button type="button" onClick={() => setShowMore(true)}>
                      Ver más
                    </button>
                  )} */}
                  <Link
                    to={`/detail?plateID=${oneRecipe.id}`}
                    className="btn btn-primary"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { Header } from "../../Header/Header";
//import { Card } from "../../Card/Card";
import API_KEY from "../../../api/apiKey";

import "./Menu.styles.css";

export const Menu = (props) => {
  //const id = 1697787;

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeNutrition=false&diet&addRecipeInformation=true`;
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data;
        setMenuList(apiData.results);
      })
      .catch((error) => {
        swAlert(<h2>Hubo errores, intenta más tarde</h2>);
      });
  }, [setMenuList]);

  const [showMore, setShowMore] = useState(false);

  const limitString = (str) => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };

  return (
    <>
      <Header />
      <div className="row">
        {menuList.map((onePlate, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{onePlate.title}</h5>
                  <button
                    className="add-btn"
                    onClick={props.addOrRemoveFromList}
                    data-recipe-id={onePlate.id}
                  >
                    +
                  </button>
                  <img src={onePlate.image} alt="" className="card-img-top" />
                  {!showMore && <p>{limitString(onePlate.summary).string}</p>}
                  {showMore && (
                    <>
                      <p>{onePlate.summary}</p>
                      <button type="button" onClick={() => setShowMore(false)}>
                        Ver Menos
                      </button>
                    </>
                  )}
                  {!showMore && limitString(onePlate.summary).addButton && (
                    <button type="button" onClick={() => setShowMore(true)}>
                      Ver más
                    </button>
                  )}
                  <Link
                    to={`/detail?plateID=${onePlate.id}`}
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

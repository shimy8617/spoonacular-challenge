import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { Header } from "../../Header/Header";
//import { Card } from "../../Card/Card";
import API_KEY from "../../../api/apiKey";

import "./Menu.styles.css";

var title = {
  "text-align": "center",
  "margin-top": "-6px",
  color: "rgb(237,78,110)",
};

var linkStyle = {
  "font-size": "16px",
  "border-radius": "10%",
  "background-color": "rgb(237,78,110)",
  whitecolor: "white",
  textDecoration: "none",
  "list-style": "none",
};

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

  /*   const [showMore, setShowMore] = useState(false);

  const limitString = (str) => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat("..."), addButton: true };
    return { string: str, addButton: false };
  }; */

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row row-cols-4">
            {menuList.map((onePlate, idx) => {
              return (
                <div className="col" key={idx}>
                  <div className="card">
                    <div className="cours2" style={{ overflow: "hidden" }}>
                      <img
                        src={onePlate.image}
                        alt=""
                        className="hover"
                        style={{
                          width: "100%",
                          height: "200px",
                          border: "1px solid transparent",
                          transition: "1s",
                        }}
                      />

                      <div className="title">
                        <h5 className="card-title" style={{ title }}>
                          {onePlate.title}
                        </h5>
                        <button
                          className="add-btn"
                          onClick={props.addOrRemoveFromList}
                          data-recipe-id={onePlate.id}
                        >
                          +
                        </button>
                      </div>

                      {/* {!showMore && (
                        <p>{limitString(onePlate.summary).string}</p>
                      )}
                      {showMore && (
                        <>
                          <p>{onePlate.summary}</p>
                          <button
                            className="sh-btn"
                            type="button"
                            onClick={() => setShowMore(false)}
                          >
                            Show less
                          </button>
                        </>
                      )}
                      {!showMore && limitString(onePlate.summary).addButton && (
                        <button
                          className="sh-btn"
                          type="button"
                          onClick={() => setShowMore(true)}
                        >
                          Show more
                        </button>
                      )} */}

                      <div className="cours4 text-center">
                        <Link
                          to={onePlate.spoonacularSourceUrl}
                          className="cou"
                          style={{
                            border: "1px solid transparent",
                            padding: "10px 20px",
                            color: linkStyle.whitecolor,
                            textDecoration: linkStyle.textDecoration,
                          }}
                        >
                          View Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

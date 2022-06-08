import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { Header } from "../../Header/Header";
//import { Card } from "../../Card/Card";
import API_KEY from "../../../api/apiKey";

import "./Menu.styles.css";

export const Menu = (props) => {
  console.log(props);
  //const id = 1697787;

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeNutrition=false&diet`;
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

  return (
    <>
      <Header />
      <div className="row">
        {menuList.map((onePlate, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card">
                <div className="card-body">
                  <div className="card-body-header">
                    <h5 className="card-title">{onePlate.title}</h5>
                    <button className="add-btn">+</button>
                  </div>
                  <img src={onePlate.image} alt="" className="card-img-top" />
                  <p className="card-text">{onePlate.diet}</p>
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

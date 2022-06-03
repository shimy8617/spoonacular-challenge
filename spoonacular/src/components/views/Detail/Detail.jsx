import { useEffect } from "react";
import axios from "axios";
import API_KEY from "../../../api/apiKey";

export const Detail = () => {
  let query = new URLSearchParams(window.location.search);
  let plateID = query.get("plateID");

  useEffect(() => {
    const endPoint = `https://api.spoonacular.com/recipes/${plateID}/information?apiKey=${API_KEY}&includeNutrition=false&diet`;
    axios
      .get(endPoint)
      .then((response) => {
        const plateData = response.data;
        console.log(plateData);
      })
      .catch((error) => {
        console.log("Hubo errores");
      });
  }, [plateID]);

  return (
    <>
      <h2>detalle</h2>
      <div className="row">
        <div className="col-4">
          <h5>Title</h5>
          <img src="" alt="" className="card-img-top" />
          <p className="card-text">summary</p>
          <h6>price</h6>
          <h6>diet</h6>
        </div>
      </div>
    </>
  );
};

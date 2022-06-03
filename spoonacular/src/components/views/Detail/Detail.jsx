import { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../../../api/apiKey";

export const Detail = () => {
  let query = new URLSearchParams(window.location.search);
  let plateID = query.get("plateID");

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.spoonacular.com/recipes/${plateID}/information?apiKey=${API_KEY}&includeNutrition=false&diet`;
    axios
      .get(endPoint)
      .then((response) => {
        const plateData = response.data;
        setRecipes(plateData);
      })
      .catch((error) => {
        console.log("Hubo errores");
      });
  }, [plateID]);

  return (
    <>
      {recipes && (
        <>
          <h5>Title: {recipes.title}</h5>
          <div className="row">
            <div className="col-4">
              <img src={recipes.image} alt="" className="card-img-top" />
              <p className="card-text">{recipes.summary}</p>
              <h6>Price: {recipes.pricePerServing}</h6>
              <h6>Diets: {recipes.diets}</h6>
            </div>
          </div>
        </>
      )}
    </>
  );
};

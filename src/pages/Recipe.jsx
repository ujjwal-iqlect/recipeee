import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/Recipe.css";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailsData = await data.json();
    setDetails(detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="detail-wrapper">
      <div className="detail-wrapper-showcase">
        <img src={details.image} alt={details.title} />
        <h2>{details.title}</h2>
      </div>
      <div className="info">
        <div className="btn-container">
          <button
            onClick={() => setActiveTab("instructions")}
            className={activeTab === "instructions" ? "active" : null}
          >
            Instructions
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className={activeTab === "ingredients" ? "active" : null}
          >
            Ingredients
          </button>
        </div>
        {activeTab === "instructions" && (
          <div>
            <h5 dangerouslySetInnerHTML={{ __html: details.summary }}></h5>
            <h5 dangerouslySetInnerHTML={{ __html: details.instructions }}></h5>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Recipe;

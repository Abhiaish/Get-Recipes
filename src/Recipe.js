import React from "react";
import style from './recipe.css';
 

const Recipe =({title,calories,image,ingredients})=>{
    return (
        <div className="recipe">
            <h1 >{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className="image" src={image} alt=""/>
          
        </div>
    )
}

export default Recipe;
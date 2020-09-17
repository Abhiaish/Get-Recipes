import React from 'react';
import Recipe from './Recipe';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const appId="de625e59";
  const keys="f1eb82842922d13edb06b9f5419e67b5";	

  const [recipes,setRecipes]= useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken')
useEffect(()=>{
  getRecipes()
},[query]);


  const getRecipes=async()=>{
    const resp=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${keys}`);
    const data = await resp.json()
    
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch =  e =>{
    setSearch(e.target.value);
    console.log(search)
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
       <input  className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button  className="button" type="submit">Search</button>
     </form>
     <div className="recipe">
     {recipes.map(recipe=>(
       <Recipe 
       key={recipe.recipe.label}
         title={recipe.recipe.label}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients}
       />
     ))}
     </div>
    </div>
  );
}

export default App;

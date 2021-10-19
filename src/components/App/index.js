// == Import npm
import React, { useState } from 'react';

// == Import
import List from 'src/components/List';
import SideBar from 'src/components/SideBar';
import data from 'src/data/meals.json';
import './styles.css';

// == Composant
export default function App() {
  const [meals, setMeals] = useState([]);

  const search = (cat) => {
    const list = data.meals.map((obj) => {
      if (Object.values(obj).includes(cat)) {
        return (
          <div key={obj.strMeal} className="card">
            <div className="card_thumbs">
              <img src={obj.strMealThumb} className="card_thumbs_img" alt="how it looks like" />
            </div>
            <div className="card_desc">
              <div className="card_desc_name">{obj.strMeal}</div>
              <div className="card_desc_nationality">{obj.strArea}</div>
              <div className="card_desc_category">{obj.strCategory}</div>
              <div className="card_desc_instructions">{obj.strInstructions.substr(0, 300)} ...</div>
            </div>
          </div>
        );
      }
    });
    setMeals(list);
  };

  const allSettings = () => {
    const list = data.meals.map((obj) => {
      <></>;
      return (
        <div key={obj.strMeal} className="card">
          <div className="card_thumbs">
            <img src={obj.strMealThumb} className="card_thumbs_img" alt="how it looks like" />
          </div>
          <div className="card_desc">
            <div className="card_desc_name">{obj.strMeal}</div>
            <div className="card_desc_nationality">{obj.strArea}</div>
            <div className="card_desc_category">{obj.strCategory}</div>
            <div className="card_desc_instructions">{obj.strInstructions.substr(0, 300)} ...</div>
          </div>
        </div>
      );
    });
    setMeals(list);
  };

  return (
    <div className="app">
      <SideBar
        search={search}
        allSettings={allSettings}
      />
      <List
        allSettings={allSettings}
        meals={meals}
      />
    </div>
  );
}

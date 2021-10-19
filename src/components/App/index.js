// == Import npm
import React, { useState, useEffect } from 'react';

// == Import
import List from 'src/components/List';
import SideBar from 'src/components/SideBar';
import data from 'src/data/allMeals.json';
import './styles.css';

// == Composant
export default function App() {
  const [meals, setMeals] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);

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

  const searchRandomMeals = () => {
    console.log("bla", randomMeals);
    const list = randomMeals.map((obj) => {
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

  useEffect(() => {
    const list = [];
    for (let i = 0; i < 50; i++) {
      const random = Math.round(Math.random() * (data.meals.length));
      const meal = data.meals[random];
      if (!list.includes(meal)) {
        list.push(meal);
      }
    }
    setRandomMeals(list);
  }, []);

  useEffect(() => {
    searchRandomMeals();
  }, [randomMeals]);

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

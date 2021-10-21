// == Import npm
import React, { useState, useEffect } from 'react';

// == Import Components
import List from 'src/components/List';
import SideBar from 'src/components/SideBar';
import Alphabet from 'src/components/Search/Alphabet';

// == Import JSON data

import data from 'src/data/allMeals.json';
import ingredients from 'src/data/ingredients.json';

// == Import Selectors functions

import {
  searchRandomMeals,
  allSettings,
  search,
  searchByLetter,
} from 'src/selectors/search';
import './styles.css';
import IngredientsFilter from '../IngredientsFilter';

// == Composant
export default function App() {
  const [meals, setMeals] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < 20; i++) {
      const random = Math.round(Math.random() * (data.meals.length));
      const meal = data.meals[random];
      if (!list.includes(meal)) {
        list.push(meal);
      }
    }
    setRandomMeals(list);
  }, []);

  useEffect(() => {
    searchRandomMeals(randomMeals, setMeals);
  }, [randomMeals]);

  return (
    <div className="app">
      <SideBar
        search={search}
        allSettings={allSettings}
        data={data}
        setMeals={setMeals}
      />
      <div className="main">
        <Alphabet
          searchByLetter={searchByLetter}
          setMeals={setMeals}
          data={data}
          meals={meals}
        />
        <IngredientsFilter
          ingredients={ingredients}
          setMeals={setMeals}
          meals={meals}
          data={data}
        />
        <List
          allSettings={allSettings}
          data={data}
          setMeals={setMeals}
          meals={meals}
        />
      </div>
    </div>
  );
}

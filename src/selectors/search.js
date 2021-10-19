import React from 'react';

export function search(cat, data, setMeals) {
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
}

export function searchRandomMeals(randomMeals, setMeals) {
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
}

export function allSettings(data, setMeals) {
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
}

export function searchByLetter(letter, setMeals, data) {
  const list = data.meals.map((obj) => {
    if (obj.strMeal.charAt(0) === letter) {
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
}

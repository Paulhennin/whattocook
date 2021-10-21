import React from 'react';

export function ingredientFilter(tagFilter, meals, setMeals) {
  let list;
  for(const ing of tagFilter) {
    console.log(ing);
    list = meals.map((obj) => {
      console.log(obj);
      for (let i=0; i<20;i++) {
        const string = `strIngredient${i}`;
        if (ing === obj[string]) {
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
      }
    });
  }
  setMeals(list);
}

export function supprIngredientFilter(
  ingredient,
  meals,
  setMeals,
  setFilteredList,
  filtered,
  setTagFilter,
  handleSupprFilter,
) {
  const filter = filtered.filter((word) => ingredient !== word);
  ingredientFilter(filter, setMeals);
  return filter;
}

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function IngredientsFilter({ ingredients }) {
  const [filtered, setFiltered] = useState([]);
  const [ingredientsList, setIngredientsList] = useState('');
  const [filteredList, setFilteredList] = useState('');

  const handleOnChange = (e) => {
    const filter = filtered;
    filter.push(e.target.value);
    setFiltered(filter);
    console.log(filtered);
    const list = filter.map((obj) => {
      <></>;
      return (
        <span className="filter_tag" key={obj}>{obj}</span>
      );
    });
    setFilteredList(list);
  };

  useEffect(() => {
    let list = [];
    for(const obj of ingredients.meals) {
      list.push(obj.strIngredient)
    };
    list = list.sort();
    list = list.map((obj) => {
      <></>;
      return (
        <option value={obj} key={obj}>{obj}</option>
      );
    });
    setIngredientsList(list);
    console.log(list);
  }, []);

  return (
    <section>
        <div className="ingredients_selected">{filteredList}</div>
      <form onSubmit="">
        <select name="ingredients" id="ingredients_selected" onChange={handleOnChange}>
          {ingredientsList}
        </select>
      </form>
    </section>
  );
}

IngredientsFilter.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { supprIngredientFilter, ingredientFilter } from 'src/selectors/filter';
import './style.scss';

export default function IngredientsFilter({ ingredients, meals, setMeals, data }) {
  const [ingredientsList, setIngredientsList] = useState('');
  const [tagFilter, setTagFilter] = useState([]);
  const [filteredList, setFilteredList] = useState('');

  const handleSupprFilter = (e) => {
    const ingredient = e.target.parentElement.id;
    const filter = supprIngredientFilter(ingredient, meals, setMeals, setFilteredList, tagFilter, setTagFilter, handleSupprFilter)
    setTagFilter(filter);
  };

  const handleOnChange = (e) => {
    const filter = tagFilter;
    filter.push(e.target.value);
    setTagFilter(filter);
    console.log(tagFilter);
    const list = filter.map((obj) => {
      <></>;
      return (
        <span className="filter_tag" key={obj} id={obj}>
          {obj}
          <span className="filter_tag_suppr" onClick={handleSupprFilter}>+</span>
        </span>
      );
    });
    setFilteredList(list);
    ingredientFilter(tagFilter, meals, setMeals);
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

  useEffect(() => {
    console.log("coucou");
    const list = tagFilter.map((obj) => {
      <></>;
      return (
        <span className="filter_tag" key={obj} id={obj}>
          {obj}
          <span className="filter_tag_suppr" onClick={handleSupprFilter}>+</span>
        </span>
      );
    });
    setFilteredList(list);
  }, [tagFilter]);

  return (
    <section>
      <div className="selected_ingredients" key={tagFilter}>{filteredList}</div>
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

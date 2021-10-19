import React from 'react';
import PropTypes from 'prop-types';

import {
  GiHamburgerMenu,
  GiBigWave,
  GiLeafSkeleton,
  GiMeat,
  GiChicken,
} from 'react-icons/gi';
import { GrIceCream } from 'react-icons/gr';
import { MdOutlineSearch, MdOutlineViewSidebar, MdOutlineSpaceDashboard, MdGridView } from 'react-icons/md';
import {
  BiHeart,
  BiCog,
} from 'react-icons/bi';

import './style.scss';

export default function SideBar({
  search,
  allSettings,
  data,
  setMeals,
}) {
  const handleSideBarClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  };

  const handleCatSearch = (e) => {
    e.preventDefault();
    search(e.currentTarget.id, data, setMeals);
  };

  const handleAllSettings = () => {
    allSettings(data, setMeals);
  }
  return (
    <>
      <div className="sidebar">
        <div className="logo_content" onClick={handleSideBarClick}>
          <div className="logo">
            <MdOutlineSpaceDashboard className="react_icons" />
            <div className="logo_name">Dashboard</div>
          </div>
          <GiHamburgerMenu className="" id="sidebar_btn" />
        </div>
        <ul className="nav_list">
          <li className="nav_items search_link">
            <MdOutlineSearch className="react_icons react_icons_search" onClick={handleSideBarClick} />
            <input type="text" placeholder="Recherche..." />
            <span className="tooltip">Search</span>
          </li>
          <li className="nav_items" onClick={handleAllSettings} id="All">
            <a href="#">
              <MdGridView className="react_icons" />
              <span className="links_name">All</span>
            </a>
            <span className="tooltip">All</span>
          </li>
          <li className="nav_items" onClick={handleCatSearch} id="Side">
            <a href="#">
              <MdOutlineViewSidebar className="react_icons" />
              <span className="links_name">Side</span>
            </a>
            <span className="tooltip">Side</span>
          </li>
          <li className="nav_items" onClick={handleCatSearch} id="Chicken">
            <a href="#">
              <GiChicken className="react_icons" />
              <span className="links_name">Chicken</span>
            </a>
            <span className="tooltip">Chicken</span>
          </li>
          <li className="nav_items" onClick={handleCatSearch} id="Beef">
            <a href="#">
              <GiMeat className="react_icons" />
              <span className="links_name">Beef</span>
            </a>
            <span className="tooltip">Beef</span>
          </li>
          <li className="nav_items" onClick={handleCatSearch} id="Vegetarian">
            <a href="#">
              <GiLeafSkeleton className="react_icons" />
              <span className="links_name">Vegetarians</span>
            </a>
            <span className="tooltip">Vegetarians</span>
          </li>
          <li className="nav_items" onClick={handleCatSearch} id="Seafood">
            <a href="#">
              <GiBigWave className="react_icons" />
              <span className="links_name">Seafoods</span>
            </a>
            <span className="tooltip">Seafoods</span>
          </li>
          <li className="nav_items" onClick={handleCatSearch} id="Dessert">
            <a href="#">
              <GrIceCream className="react_icons" />
              <span className="links_name">Desserts</span>
            </a>
            <span className="tooltip">Desserts</span>
          </li>
          <li className="nav_items">
            <a href="#">
              <BiHeart className="react_icons" />
              <span className="links_name">Favs</span>
            </a>
            <span className="tooltip">Favs</span>
          </li>
          <li className="nav_items">
            <a href="#">
              <BiCog className="react_icons" />
              <span className="links_name">Settings</span>
            </a>
            <span className="tooltip">Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
}

SideBar.propTypes = {
  search: PropTypes.func.isRequired,
  allSettings: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  setMeals: PropTypes.func.isRequired,
};

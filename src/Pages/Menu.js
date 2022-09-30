import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import "../Styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            key={key}
          />
        ))}
      </div>
      <div menuList>{}</div>
    </div>
  );
}

export default Menu;

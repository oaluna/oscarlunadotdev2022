import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import "./Menu.css";

const menuItems = [
  {
    title: "home"
  },
  {
    title: "about"
  },
  {
    title: "work"
  },
  {
    title: "contact"
  },
  {
    title: "search"
  }
];

const Menu = () => {
  const [isToggle, setToggle] = useState(false);
  const [curSection, setCurSection] = useState("");
  const handleToggle = () => {
    setToggle(!isToggle);
  };

  return (
   <div className="menu-container">
   <div className="menu">
      <ul className={isToggle === true ? "menu active" : "menu"}>
        <div
          className={isToggle === true ? "toggle active" : "toggle"}
          onMouseOver={handleToggle}
          onMouseAway={handleToggle}
        >
          {isToggle && <ion-icon name="add-outline"></ion-icon>}
        </div>
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              style={{ "--i": index }}
              onMouseOver={() => setCurSection(item.title)}
              className={curSection === item.title ? "active" : null}
            >
              <div className="indicator">
                <a href={"#" + item.title}>
                  {item.title === "home" && <HomeIcon />}
                  {item.title === "about" && <PersonIcon />}
                  {item.title === "work" && <WorkIcon />}
                  {item.title === "contact" && <PhoneIcon />}
                  {item.title === "search" && <SearchIcon />}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
};

export default Menu;

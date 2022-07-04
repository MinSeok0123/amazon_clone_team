import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import sprite from "./images/sprite.png";

function Header() {
  const [selectedOption, setSelectedOption] = useState("All");

  return (
    <nav className="header">
      <div className="header__top">
        <Link to="/">
          <img
            className="header__logo"
            alt="amazon-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          ></img>
        </Link>
        <div className="header__location">
          <img
            className="header__locationImg"
            src={sprite}
            alt="location"
          ></img>
          <div>
            Delever to MinSeok
            <span>
              <b>Busan Sw Meister High School</b>
            </span>
          </div>
        </div>
        {/* search box */}
        <div className="header__search">
          <Select
            className="header__searchSelect"
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
            autoWidth
            // style={{ width: `${stringWidth + 100}` }}
          >
            <option className="header__option" value="All">
              All
            </option>
            <option className="header__option" value="arts-craft">
              Arts & Craft
            </option>
            <option className="header__option" value="automotive">
              Automotive
            </option>
            <option className="header__option" value="baby">
              Baby
            </option>
            <option className="header__option" value="beauty-personal">
              Beauty & Personal Care
            </option>
            <option className="header__option" value="books">
              Books
            </option>
            <option className="header__option" value="computers">
              Computers
            </option>
            <option className="header__option" value="Deals">
              Deals
            </option>
            <option className="header__option" value="Digital Music">
              Digital Music
            </option>
            <option className="header__option" value="Electronics">
              Electronics
            </option>
            <option className="header__option" value="Girls' Fashion">
              Girls' Fashion
            </option>
            <option className="header__option" value="Health & HouseHold">
              Health & HouseHold
            </option>
            <option className="header__option" value="Home & Kitchen">
              Home & Kitchen
            </option>
            <option className="header__option" value="Industrial & Scientific">
              Industrial & Scientific
            </option>
            <option className="header__option" value="Kindle Store">
              Kindle Store
            </option>
            <option className="header__option" value="Luggage">
              Luggage
            </option>
            <option className="header__option" value="Men's Fashion">
              Men's Fashion
            </option>
            <option className="header__option" value="Movies & TV">
              Movies & TV
            </option>
            <option className="header__option" value="Music, CDs & Vinyl">
              Music, CDs & Vinyl
            </option>
          </Select>

          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* 4 Links */}
        <div className="header__nav">
          <div className="header__language"></div>
          <Link to="/" className="header__link">
            <div className="header__account header__linkblock">
              <span className="">Hello, MinSeok </span>
              <span className="">
                <b>Account & Lists</b>
              </span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__order  header__linkblock">
              <span className="">Returns </span>
              <span className="">
                <b>& Orders</b>
              </span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__shoppingCart header__linkblock">
              <img className="header__cartImg" src={sprite} alt="cart"></img>
              <span className="header__cartNum">7</span>
              <span>
                <b>Cart</b>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__bottom">
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Today's Deals</a>
          </li>
          <li>
            <a href="#">Customer Service</a>
          </li>
          <li>
            <a href="#">MinSeok's Amazon.com</a>
          </li>
          <li>
            <a href="#">Buy Again</a>
          </li>
          <li>
            <a href="#">Browsing History</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
          <li>
            <a href="#">Registry</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

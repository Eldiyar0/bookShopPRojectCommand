import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header-navs">
            <Link to="/">
              <h4>Bookshop</h4>
            </Link>
            <Link to="/Categories">
              <h4>Categories</h4>
            </Link>
            <Link to="/recent">
              <h4>Recent</h4>
            </Link>
            <Link to="/BooksComponents">
              <h4>Books</h4>
            </Link>
            <h4>About Us</h4>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="header-icons"
          >
            <h5>
              <CiSearch
                style={{
                  width: "24px",
                  height: "24px",
                  padding: " 2px, 1.69px, 1.69px, 2px",
                }}
              />
            </h5>
            <h5 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <IoBag
                style={{
                  width: "24px",
                  height: "24px",
                  padding: " 2px, 1.69px, 1.69px, 2px",
                }}
              />{" "}
              <span style={{ fontSize: "20px" }}>0</span>
              <Link to="/admin">
                <MdAdminPanelSettings
                  style={{
                    width: "24px",
                    height: "24px",
                    padding: " 2px, 1.69px, 1.69px, 2px",
                  }}
                />
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

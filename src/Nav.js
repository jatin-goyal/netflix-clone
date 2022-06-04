import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav({ show }) {
  // ---------------------------------------------------
  const navigate = useNavigate();

  return (
    <div className={`nav ${!show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          // logo png image taken from : https://www.freepnglogos.com/images/netflix-logo-png-2562.html
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;

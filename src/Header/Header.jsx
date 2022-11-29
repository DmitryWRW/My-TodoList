import React from "react";
const Header = (props) => {
  return (
    <div>
      <div className="head">
        <h3>{props.title}</h3>
      </div>
      <input type="text" />
      <button>+</button>
    </div>
  );
};

export default Header;

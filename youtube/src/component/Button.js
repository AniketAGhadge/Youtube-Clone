import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="p-1 px-5 m-1 bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;

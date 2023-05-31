import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="User"
        src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;

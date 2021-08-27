import React from "react";

const ItemGroup = ({ title, completed, edit, onClick, onChange }) => {
  if (edit) {
    return (
      <li className="list-group-item" onClick={() => onClick()}>
        {title}
      </li>
    );
  } else {
    return (
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    );
  }
};

export default ItemGroup;

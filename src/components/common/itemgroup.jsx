import React from "react";

const ItemGroup = ({ title, completed, edit, onClick, onChange }) => {
  const completedFormat = completed
    ? "list-group-item disabled"
    : "list-group-item";
  if (edit) {
    return (
      <React.Fragment>
        <li className={completedFormat} onClick={() => onClick()}>
          {completed ? <strike>{title}</strike> : title}
        </li>
      </React.Fragment>
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

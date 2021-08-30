import React from "react";

const ItemGroup = ({ title, edit, onClick, onChange }) => {
  if (edit) {
    return (
      <React.Fragment>
        <li className="list-group-item" onClick={() => onClick()}>
          {title}
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

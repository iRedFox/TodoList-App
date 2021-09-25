import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Complete = ({ completed, onClick }) => {
  const type = completed ? "fas" : "far";
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={[type, "check-square"]}
      transform="grow-6"
    />
  );
};
export default Complete;

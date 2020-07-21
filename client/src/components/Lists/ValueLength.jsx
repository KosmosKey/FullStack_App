import React from "react";
import "./ValueLength.scss";

export const ValueLength = ({ ValueLengthArray }) => {
  return (
    <div className="container mt-2 text-center">
      {ValueLengthArray.length === 0 ? (
        <ul className="list-group">
          <li className="list-group-item py-3">
            <h1>You do not have anything</h1>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

import React from "react";
import "./SetLoading.scss";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/core";

const SetLoading = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    font-size: 100px;
    border-color: #5b1f65;
  `;
  return (
    <div className="setLoading_container">
      <BarLoader
        className="clipLoader"
        css={override}
        size={75}
        color={"#5B1F65"}
      />
    </div>
  );
};

export default SetLoading;

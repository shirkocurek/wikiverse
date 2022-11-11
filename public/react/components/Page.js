import React from "react";
import { useState } from "react";
import { Footer } from "./Footer";

export const Page = (props) => {
  return (
    <>
      <br />
      <h3
        className="titlestyle"
        onClick={() => {
          props.clickThis(props.page.slug);
        }}
      >
        {props.page.title}
      </h3>
    </>
  );
};

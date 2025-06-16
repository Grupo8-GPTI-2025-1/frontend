'use client'
import PropTypes from "prop-types";
import React, { JSX } from "react";
import { useReducer } from "react";
import { Frame } from "../frame/Frame";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  frameUnion: string;
}

export const PropiedadDropdown = ({
  property1,
  frameUnion = "image.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`propiedad-dropdown ${state.property1}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <Frame
        className={`${state.property1 === "variant-2" ? "class" : "class-2"}`}
        union={frameUnion}
      />
      <div className="tipo-wrapper">
        <div className="tipo">Providencia</div>
      </div>

      <div className="tipo-wrapper">
        <div className="tipo">Ñuñoa</div>
      </div>

      <div className="tipo-wrapper">
        <div className="tipo">Recoleta</div>
      </div>

      <div className="tipo-wrapper">
        <div className="tipo">Macul</div>
      </div>

      <div className="tipo-wrapper">
        <div className="tipo">Las Condes</div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

PropiedadDropdown.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  frameUnion: PropTypes.string,
};

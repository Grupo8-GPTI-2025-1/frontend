import React, { JSX } from "react";
import { Frame } from "../components/frame/Frame";
import Navbar from "../components/navbar/Navbar";
// import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import { PropiedadDropdown } from "../components/propiedad-dropdown/PropiedadDropdown";
import "./style.css";

export default function AddProperty() {
  return (
    <>
    <Navbar />
    <div className="add-property">
      <div className="div-2">
        <p className="p">Ingresa aquí las características de tu propiedad</p>

        <div className="overlap-group">
          <div className="rectangle" />

          <div className="text-wrapper-2">Cantidad de baños</div>

          <div className="text-wrapper-3">Comuna</div>

          <div className="rectangle-2" />

          <div className="text-wrapper-4">Tamaño</div>

          <div className="text-wrapper-5">m</div>

          <div className="text-wrapper-6">2</div>

          <PropiedadDropdown
            frameUnion="union-5.svg"
            property1="default"
          />
          <PropiedadDropdown
            frameUnion="union-6.svg"
            property1="default"
          />
        </div>

        <div className="text-wrapper-7">Tamaño</div>

        <div className="text-wrapper-8">Tipo de propiedad</div>

        <div className="propiedad-dropdown-2">
          <Frame className="frame-2" union="union-7.svg" />
          <div className="frame-3">
            <div className="tipo-3">Departamento</div>
          </div>

          <div className="frame-3">
            <div className="tipo-3">Casa</div>
          </div>
        </div>

        {/* <PropertyDefaultWrapper
          className="propiedad-dropdown-3"
          frameUnion="union-4.svg"
          property1="default"
        /> */}
      </div>
    </div>
    </>
  );
};

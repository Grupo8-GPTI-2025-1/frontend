import PropTypes from "prop-types";
import React, { JSX } from "react";
import "./styles.css";

interface Props {
  className: any;
  union: string;
}

export const Frame = ({
  className,
  union = "union.svg",
}: Props): JSX.Element => {
  return (
    <div className={`frame ${className}`}>
      <div className="text-wrapper">Tipo</div>

      <img className="union" alt="Union" src={union} />
    </div>
  );
};

Frame.propTypes = {
  union: PropTypes.string,
};

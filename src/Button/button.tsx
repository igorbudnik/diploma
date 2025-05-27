import React, { SyntheticEvent } from "react";
import buttonStyle from "./button.module.css";

interface button {
  onClick: (e: SyntheticEvent, url: string) => void;
  size?: string;
  children?: React.ReactNode;
}

const Button: React.FC<button> = ({ onClick, size, children }) => {
  return (
    <button className={buttonStyle.button} onClick={(e) => onClick(e, "/")}>
      {children}
    </button>
  );
};

export default Button;

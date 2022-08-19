import React from "react";
import display from './Display.module.css';
import Form from "../Form/Form";

const Display:React.FC = () => {
  return(
    <div className={display.container}>
      <div className={display.display}>
        <Form />
      </div>
    </div>
  )
}

export default Display;
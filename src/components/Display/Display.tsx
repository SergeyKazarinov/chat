import React from "react";
import display from './Display.module.css';
import Form from "../Form/Form";
import Messages from "../Messages/Messages";

const Display:React.FC = () => {
  return(
    <div className={display.container}>
      <div className={display.display}>
        <Messages />
        <Form />
      </div>
    </div>
  )
}

export default Display;
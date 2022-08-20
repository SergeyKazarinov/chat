import React, { useEffect, useState } from "react";
import display from './Display.module.css';
import Form from "../Form/Form";
import Messages from "../Messages/Messages";
import {CurrentMessageContext, CurrentMessage} from '../../Context/CurrentMessageContext';

const Display:React.FC = () => {
  const [messages, setMessages] = useState(CurrentMessage);
  const handleSubmitMessage = (data: {id: number, isOwn: boolean, name: string, text: string, time: string,}): void => {
    data.id = messages.length + 1;
    setMessages(messages.concat(data));
  }
  
  return(
    <CurrentMessageContext.Provider value={messages}>
    <div className={display.container}>
      <div className={display.display}>
        <Messages />
        <Form submitClick={handleSubmitMessage}/>
      </div>
    </div>
    </CurrentMessageContext.Provider>
  )
}

export default Display;
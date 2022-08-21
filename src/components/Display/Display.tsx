import React, { useEffect, useState } from "react";
import display from './Display.module.css';
import Form from "../Form/Form";
import Messages from "../Messages/Messages";
import {CurrentMessageContext, CurrentMessage} from '../../Context/CurrentMessageContext';

const Display:React.FC = () => {
  const [messages, setMessages] = useState(CurrentMessage);
  const [isAnswer, setIsAnswer] = useState(false);
  const [answerMessage, setAnswerMessage] = useState({});

  const handleSubmitMessage = (data: {id: number, isOwn: boolean, name: string, text: string, time: string}): void => {
    data.id = messages.length + 1;
    setMessages(messages.concat(data));
  }
  
  const handleAnswerClick = (msgs: {id: number, isOwn: boolean, name: string, text: string, time: string}):void => {
    setIsAnswer(true);
    setAnswerMessage(msgs);
  }

  const handleCloseAnswerMessage = ():void => {
    setIsAnswer(false);
  }

  const handleResetAnswerMessage = ():void => {
    setAnswerMessage({});
  }

  return(
    <CurrentMessageContext.Provider value={messages}>
    <div className={display.container}>
      <div className={display.display}>
        <Messages answerClick={handleAnswerClick} isAnswer={isAnswer} message={answerMessage}/>
        <Form submitClick={handleSubmitMessage} isAnswer={isAnswer} message={answerMessage} onCloseClick={handleCloseAnswerMessage} resetAnswerMessage={handleResetAnswerMessage}/>
      </div>
    </div>
    </CurrentMessageContext.Provider>
  )
}

export default Display;
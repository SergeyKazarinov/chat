import React from "react";
import display from './Display.module.css';
import Form from "../Form/Form";
import Messages from "../Messages/Messages";

const Display:React.FC = () => {

  type arrayMessages = {
    id: number,
    isOwn: boolean,
    name: string,
    text: string,
    time: string,
  }
  
  const messages: Array<arrayMessages> = [
    {
      id: 1,
      isOwn: true,
      name: 'Евгений',
      text: 'Хочу программировать',
      time: '15:55',
    }, 
    {
      id: 2,
      isOwn: false,
      name: 'Чат-бот',
      text: 'Попробуй phyton',
      time: '15:55',
    }, 
    {
      id: 1,
      isOwn: true,
      name: 'Евгений',
      text: 'Спасибо за ответ',
      time: '15:55',
    }, 
    {
      id: 2,
      isOwn: false,
      name: 'Чат-бот',
      text: 'Был рад помочь, обращайся!',
      time: '15:55',
    },
  ]
  
  return(
    <div className={display.container}>
      <div className={display.display}>
        <Messages msgs={messages}/>
        <Form />
      </div>
    </div>
  )
}

export default Display;
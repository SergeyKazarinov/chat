import React, { useEffect, useState } from "react";
import display from './Display.module.css';
import Form from "../Form/Form";
import Messages from "../Messages/Messages";

type arrayMessages = {
  id: number,
  isOwn: boolean,
  name: string,
  text: string,
  time: string,
}

const messages: any = [
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
    id: 3,
    isOwn: true,
    name: 'Евгений',
    text: 'Спасибо за ответ',
    time: '15:55',
  }, 
  {
    id: 4,
    isOwn: false,
    name: 'Чат-бот',
    text: 'Был рад помочь, обращайся!',
    time: '15:55',
  },
]

const Display:React.FC = () => {
  const [arrayMessages, setArrayMessages] = useState(messages);
console.log(arrayMessages)
  const handleSubmitMessage = (data: {id: number, isOwn: boolean, name: string, text: string, time: string}): void => {
    data.id = messages.length + 1;
    const newArray: object[] = arrayMessages.push(data); 
    console.log(arrayMessages);
    // setArrayMessages([arrayMessages, ...data]);
  }
  
  return(
    <div className={display.container}>
      <div className={display.display}>
        <Messages msgs={arrayMessages}/>
        <Form submitClick={handleSubmitMessage}/>
      </div>
    </div>
  )
}

export default Display;
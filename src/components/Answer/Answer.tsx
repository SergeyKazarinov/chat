import React from "react";
import answer from './Answer.module.css';

const Answer:React.FC<{message: {id: number, isOwn: boolean, name: string, text: string, time: string}, onCloseClick: any}> = ({message, onCloseClick}) => {
  return(
    <div className={answer.container}>
      <div className={answer.flex}>
        <h2 className={answer.title}>Ответ на сообщение:</h2> 
        <button type="button" className={answer.closeBtn} onClick={onCloseClick}>x</button>
      </div>
      <div className={answer.messageContainer}>
        <p className={answer.name}>{message.name}</p>
        <p className={answer.text}>{message.text}</p>
      </div>
    </div>
  )
}

export default Answer;
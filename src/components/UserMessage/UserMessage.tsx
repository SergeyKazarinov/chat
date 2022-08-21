import React from "react";
import userMessage from "./UserMessage.module.css";
import icon from "../../images/User.png";

type messages = {
  id: number,
  isOwn: boolean,
  name: string,
  text: string,
  time: string,
}



const UserMessage: React.FC<{msgs: messages, answerClick: any}> = ({msgs, answerClick}) => {
  function handleClick():void {
    answerClick(msgs)
  }

  return(
    <div className={userMessage.container}>
      <img className={userMessage.icon} src={icon} />
      <div className={userMessage.message}>
        <div className={userMessage.flex}>
          <span className={userMessage.name}>{msgs.name}</span>
          <button type="button" className={userMessage.answer} onClick={handleClick}>ответить</button>
        </div>
        <p className={userMessage.text}>{msgs.text}</p>
        <span className={userMessage.time}>{msgs.time}</span>
      </div>
    </div>
  )
}

export default UserMessage;
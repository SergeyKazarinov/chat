import React from "react";
import userMessage from "./UserMessage.module.css";
import icon from "../../images/User.png";

const UserMessage: React.FC = () => {
  return(
    <div className={userMessage.container}>
      <img className={userMessage.icon} src={icon} />
      <div className={userMessage.message}>
        <div className={userMessage.flex}>
          <span className={userMessage.name}>Евгений</span>
          <button type="button" className={userMessage.answer}>ответить</button>
        </div>
        <p className={userMessage.text}>Хочу программировать</p>
        <span className={userMessage.time}>15:55</span>
      </div>
    </div>
  )
}

export default UserMessage;
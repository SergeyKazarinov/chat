import React from "react";
import otherMessage from "./OtherMessage.module.css";
import icon from "../../images/botMessage.png";

const OtherMessage: React.FC = () => {
  return(
    <div className={otherMessage.container}>
      <img className={otherMessage.icon} src={icon} />
      <div className={otherMessage.message}>
        <div className={otherMessage.flex}>
          <span className={otherMessage.name}>Чат-бот</span>
          <button type="button" className={otherMessage.answer}>ответить</button>
        </div>
        <p className={otherMessage.text}>Хочу программировать</p>
        <span className={otherMessage.time}>15:55</span>
      </div>
    </div>
  )
}

export default OtherMessage;
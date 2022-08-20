import React from "react";
import otherMessage from "./OtherMessage.module.css";
import icon from "../../images/botMessage.png";

type messages = {
  id: number,
  isOwn: boolean,
  name: string,
  text: string,
  time: string,
}

const OtherMessage: React.FC<{msgs: messages}> = ({msgs}) => {
  return(
    <div className={otherMessage.container}>
      <img className={otherMessage.icon} src={icon} />
      <div className={otherMessage.message}>
        <div className={otherMessage.flex}>
          <span className={otherMessage.name}>{msgs.name}</span>
          <button type="button" className={otherMessage.answer}>ответить</button>
        </div>
        <p className={otherMessage.text}>{msgs.text}</p>
        <span className={otherMessage.time}>{msgs.time}</span>
      </div>
    </div>
  )
}

export default OtherMessage;
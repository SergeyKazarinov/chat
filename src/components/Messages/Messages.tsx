import React, { useContext, useEffect, useRef } from "react";
import { CurrentMessageContext } from "../../Context/CurrentMessageContext";
import OtherMessage from "../OtherMessage/OtherMessage";
import UserMessage from "../UserMessage/UserMessage";
import messages from './Messages.module.css'

type itemMessages = {
  id: number,
  isOwn: boolean,
  name: string,
  text: string,
  time: string,
}

const Messages:React.FC<{answerClick: object}> = ({answerClick}) => {
  const messageContext = useContext(CurrentMessageContext);

  return(
    <div className={messages.container}>
      {messageContext.map((item: itemMessages, index: number) => (
        item.isOwn == true
        ? <UserMessage  key={index} msgs={item} answerClick={answerClick}/>
        : <OtherMessage key={index} msgs={item} answerClick={answerClick}/>
      ))}
    </div>
  )
}

export default Messages;
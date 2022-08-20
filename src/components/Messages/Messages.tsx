import React from "react";
import UserMessage from "../UserMessage/UserMessage";
import messages from './Messages.module.css'

const Messages:React.FC = () => {
  return(
    <div className={messages.container}>
      <UserMessage />
      <UserMessage />
    </div>
  )
}

export default Messages;
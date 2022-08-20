import React from "react";
import OtherMessage from "../OtherMessage/OtherMessage";
import UserMessage from "../UserMessage/UserMessage";
import messages from './Messages.module.css'

const Messages:React.FC = () => {
  return(
    <div className={messages.container}>
      <UserMessage />
      <UserMessage />
      <OtherMessage />
      <UserMessage />
      <OtherMessage />
      <OtherMessage />
    </div>
  )
}

export default Messages;
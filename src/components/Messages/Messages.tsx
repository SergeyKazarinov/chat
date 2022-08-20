import React from "react";
import OtherMessage from "../OtherMessage/OtherMessage";
import UserMessage from "../UserMessage/UserMessage";
import messages from './Messages.module.css'

type arrayMessages = {
  id: number,
  isOwn: boolean,
  name: string,
  text: string,
  time: string,
}

const Messages:React.FC<{msgs: Array<arrayMessages>}> = ({msgs}) => {
  console.log(msgs[0].id)
  return(
    <div className={messages.container}>
      {msgs.map((item: { id: number, isOwn: boolean, name: string, text: string, time: string }) => (
        item.isOwn == true
        ? <UserMessage  msgs={item}/>
        : <OtherMessage msgs={item}/>
      ))}
    </div>
  )
}

export default Messages;
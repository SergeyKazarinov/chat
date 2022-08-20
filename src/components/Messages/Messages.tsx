import React, { useEffect, useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    scrollRef.current?.scrollIntoView(false)
  }, [msgs])

  return(
    <div className={messages.container} ref={scrollRef}>
      {msgs.map((item: { id: number, isOwn: boolean, name: string, text: string, time: string }, index: number) => (
        item.isOwn == true
        ? <UserMessage  key={index} msgs={item}/>
        : <OtherMessage key={index} msgs={item}/>
      ))}
    </div>
  )
}

export default Messages;
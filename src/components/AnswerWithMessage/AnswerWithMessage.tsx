import React from "react";
import answer from "./AnswerWithMessage.module.css";

const AnswerWithMessage:React.FC<{msgs: {id: number, isOwn: boolean, name: string, text: string, time: string, answerName?: string, answerText?: string}}> = ({msgs}) => {
  return(
  <div className={answer.Container}>
    <div className={answer.messageContainer}>
      <p className={answer.name}>{msgs.answerName}</p>
      <p className={answer.text}>{msgs.answerText}</p>
    </div>
  </div>
  )
}

export default AnswerWithMessage;
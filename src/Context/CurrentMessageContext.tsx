import React, {createContext} from "react";


type objectMessages = {
  id: number,
  isOwn: boolean,
  name: string,
  text: string,
  time: string,
}

export const CurrentMessage: Array<objectMessages> = [
  {
    id: 1,
    isOwn: true,
    name: 'Евгений',
    text: 'Хочу программировать',
    time: '15:55',
  }, 
  {
    id: 2,
    isOwn: false,
    name: 'Чат-бот',
    text: 'Попробуй phyton',
    time: '15:55',
  }, 
  {
    id: 3,
    isOwn: true,
    name: 'Евгений',
    text: 'Спасибо за ответ',
    time: '15:55',
  }, 
  {
    id: 4,
    isOwn: false,
    name: 'Чат-бот',
    text: 'Был рад помочь, обращайся!',
    time: '15:55',
  },
]

export const CurrentMessageContext = createContext(CurrentMessage);





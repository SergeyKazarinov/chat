import React, { useState, useReducer } from "react";
import form from './Form.module.css';
import reducer from "../../reduser";
import Answer from "../Answer/Answer";

const Form:React.FC<any> = ({submitClick, isAnswer, message,onCloseClick}) => {
  const date = new Date();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(reducer, text);
  const [isBoldButton, setIsBoldButton] = useState(false);
  const [isItalicButton, setIsItalicButton] = useState(false);
  const [isUnderlineButton, setIsUnderlineButton] = useState(false);
  const [isOlButton, setIsOlButton] = useState(false);
  const [isUlButton, setIsUlButton] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    submitClick({
      isOwn: true,
      name,
      text: (Boolean(state.count) ? state.count : text),
      time: `${date.getHours()}:${date.getMinutes()}`
    });
    setName('')
    setText('')
    dispatch({type: 'reset', payload: ''})
    resetAllButton();
  }


  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  function handleChangeText(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setText(e.target.value);
  }

  function handleBoldClick() {
    dispatch({type: 'bold', payload: <b>{text}</b>})
    setIsBoldButton(true);
    setIsItalicButton(false);
    setIsUnderlineButton(false);
    setIsOlButton(false);
  }

  function handleItalicClick() {
    dispatch({type: 'italic', payload: <i>{text}</i>})
    setIsItalicButton(true);
    setIsBoldButton(false);
    setIsUnderlineButton(false);
    setIsOlButton(false);
    setIsUlButton(false);
  }

  function handleUnderlineClick() {
    dispatch({type: 'underline', payload: <u>{text}</u>})
    setIsUnderlineButton(true);
    setIsBoldButton(false);
    setIsItalicButton(false);
    setIsOlButton(false);
    setIsUlButton(false);
  }
  
  function handleOlClick() {
    dispatch({type: 'ol', payload: <ol>{text}</ol>})
    setIsOlButton(true);
    setIsUnderlineButton(false);
    setIsBoldButton(false);
    setIsItalicButton(false);
    setIsUlButton(false);
  }

  function handleUlClick() {
    dispatch({type: 'ul', payload: <ul>{text}</ul>})
    setIsUlButton(true);
    setIsOlButton(false);
    setIsUnderlineButton(false);
    setIsBoldButton(false);
    setIsItalicButton(false);
  }

  function handleResetClick() {
    dispatch({type: 'reset', payload: text})
    resetAllButton();
  }

  function resetAllButton() {
    setIsUlButton(false);
    setIsOlButton(false);
    setIsUnderlineButton(false);
    setIsBoldButton(false);
    setIsItalicButton(false);
  }

  return (
    <form className={form.form} id="form" onSubmit={handleSubmit}>
      <fieldset className={form.fieldset}>
        <div className={form.formatting}>
          <div className={form.gap}>
            <button type="button" className={`${form.buttonFormatting} ${form.buttonBold} ${isBoldButton && form.buttonActive}`} onClick={handleBoldClick} />
            <button type="button" className={`${form.buttonFormatting} ${form.buttonItalic} ${isItalicButton && form.buttonActive}`} onClick={handleItalicClick} />
            <button type="button" className={`${form.buttonFormatting} ${form.buttonUnderline} ${isUnderlineButton && form.buttonActive}`} onClick={handleUnderlineClick}/>
            <button type="button" className={`${form.buttonFormatting} ${form.buttonOl} ${isOlButton && form.buttonActive}`} onClick={handleOlClick}/>
            <button type="button" className={`${form.buttonFormatting} ${form.buttonUl} ${isUlButton && form.buttonActive}`} onClick={handleUlClick}/>
          </div>
          <button type="button" className={`${form.buttonFormatting} ${form.buttonReset}`} onClick={handleResetClick} />
        </div>
        {isAnswer && <Answer message={message} onCloseClick={onCloseClick}/>}
        <input type="text" name="name" className={`${form.input} ${form.inputName}`} placeholder="Имя" value={name} onChange={handleChangeName} required></input>
        <textarea 
          name="message" 
          className={`${form.input} ${form.inputMessage}`} 
          placeholder="Сообщение" 
          value={text} 
          onChange={handleChangeText} 
          form="form"
          required
        />
        <button className={form.button}></button>
      </fieldset>
    </form>
  )
}

export default Form;
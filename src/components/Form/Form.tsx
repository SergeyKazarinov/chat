import React, { useState } from "react";
import form from './Form.module.css';

const Form:React.FC<any> = ({submitClick}) => {
  const date = new Date();
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    submitClick({
      isOwn: true,
      name,
      text,
      time: `${date.getHours()}:${date.getMinutes()}`
    });
    setName('')
    setText('')
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  function handleChangeText(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setText(e.target.value);
  }
  
  return (
    <form className={form.form} id="form" onSubmit={handleSubmit}>
      <fieldset className={form.fieldset}>
        <div className={form.formatting}>
          
        </div>
        <input type="text" name="name" className={`${form.input} ${form.inputName}`} placeholder="Имя" value={name} onChange={handleChangeName} required></input>
        <textarea name="message" className={`${form.input} ${form.inputMessage}`} placeholder="Сообщение" value={text} onChange={handleChangeText} form="form" required></textarea>
        <button className={form.button}></button>
      </fieldset>
    </form>
  )
}

export default Form;
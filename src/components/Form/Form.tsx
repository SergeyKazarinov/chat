import React from "react";
import form from './Form.module.css';

const Form:React.FC = () => {
  return (
    <form className={form.form}>
      <fieldset className={form.fieldset}>
        <div className={form.formatting}>
          
        </div>
        <input type="text" name="name" className={`${form.input} ${form.inputName}`} placeholder="Имя"></input>
        <textarea name="message" className={`${form.input} ${form.inputMessage}`} placeholder="Сообщение" ></textarea>
        <button type="button" className={form.button}></button>
      </fieldset>
    </form>
  )
}

export default Form;
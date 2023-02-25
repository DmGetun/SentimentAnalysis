import { ReactPropTypes } from "react";


function InputForm(props) {

    let onChange = props.onChange;
    let submitForm = props.onSubmit;

    return (
        <form className="p-10" onSubmit={(e) => submitForm(e)}>
            <label htmlFor="message" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Введите текст для анализа</label>
            <textarea onChange = {(e) => onChange(e)}rows={10} cols={40} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          <input type="submit" value="Отправить"/>
        </form>
    )
}

export default InputForm
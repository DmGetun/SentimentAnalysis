

function OutputForm(props) {

    let estimate = props.estimate

    return (
        <form className="p-10">
            <label htmlFor="message" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Результат</label>
            <textarea disabled rows={10} cols={40} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={estimate}></textarea>
        </form>
    )
}

export default OutputForm
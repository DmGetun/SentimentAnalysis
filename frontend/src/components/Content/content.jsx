import { useState } from "react"
import InputForm from "./InputForm"
import OutputForm from "./OutputForm"

function Content() {

    const [text, setText] = useState('')
    const [data, setData] = useState({'text': '', 'estimate': 0})
    const [estimate, setEstimate] = useState('')

    const updateText = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    async function submitForm(e){
        e.preventDefault()
        let url = '/api/get_estimate'

        let response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"text": text})
        })
        let data = await response.json()
        console.log(data.data)
        setData(data.data)
        setEstimate(data.data.estimate)
    }

    return (
        <div className="grid grid-cols-2">
            <InputForm onChange={updateText} onSubmit={submitForm}/>
            <OutputForm estimate={estimate}/>
        </div>
    )
}

export default Content
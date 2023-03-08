import React, { useState } from "react"



export default function UseSt() {

    let arr = ['Sasha', 'Vova', 'Sveta']

    let inputValue = React.createRef();
    let selectValue = React.createRef();

    const [out, setOut] = useState(0)
    const [comment, setComment] = useState([])

    function addList() {
        let newComment = [...comment, inputValue.current.value]
        setComment(newComment)
    }

    function countPlus() {
        let count = out
        count++
        setOut(count)
    }



    return (
        <>
            <h2>{out}</h2>
            <button onClick={countPlus}>count</button>
            <br />
            <br />
            <input ref={inputValue} type="text" />
            <button onClick={addList}>Add</button>
            <ul>
                {comment.map((item, index) => <li key={index}>{item}</li>)}
            </ul>


        </>
    )
}
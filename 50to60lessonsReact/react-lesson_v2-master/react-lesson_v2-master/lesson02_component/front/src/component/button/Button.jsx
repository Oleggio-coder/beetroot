
import './index.css'

const buttonStyle = {
    color: "red",
    width: '400px',
}

const buttonClass = {
    main: 'button',
    subClass: "button-red"
}

const buttonStyleArr = ['button', 'button-red']


export function Button(props) {
                                                     // arr
   // return <button style={buttonStyle} className={buttonStyleArr.join(' ')}>Hello {props.name || "Start"}</button>
    return <button style={buttonStyle} className={`button ${props.className || ''}`}>Hello {props.name || "Start"}</button>
}


export function ButtonIcon(props) {
    return <button className={`button ${props.className || ''}`}>👉 {props.name || "Start"}</button>
}
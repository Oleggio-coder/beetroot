
export default function Cart({item, text}) {
    return (
        <li>
            <span>Hello: {item.name}</span>
            <span>Age: {item.age}</span>
            <span>{text}</span>
        </li>
    )
}
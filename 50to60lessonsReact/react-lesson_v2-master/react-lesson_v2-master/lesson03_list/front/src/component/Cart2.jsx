
export default function CartTwo({item}) {
    return (
        <li>
            {item.name && <span>Hello: {item.name}</span>}
            <span>Age: {item.age}</span>
            {item.age > 18 ? <span>Підходить</span>: <span> не Підходить</span>}
        </li>
    )
}
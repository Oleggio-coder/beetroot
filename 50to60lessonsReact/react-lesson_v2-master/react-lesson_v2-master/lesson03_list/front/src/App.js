import Cart from "./component/Cart";
import CartTwo from "./component/Cart2";

import {Users, arr} from './data/Users'


export default function App() {
  const newObj = Users.map(item => (
      // if
      // item.age > 18 &&  <Cart key={item.id} item={item}/>
      // if / else
      // item.age > 18 ? <Cart key={item.id} item={item} text='Підходить'/> : <Cart key={item.id} item={item} text='Не Підходить'/>
      <CartTwo item={item} />
  ))

  const user = arr.map(item => <li key={item}>{item}</li>)
  return (
    <ul>
     {/*<li>{arr[0]}</li>*/}
     {/*<li>{arr[1]}</li>*/}
     {/*<li>{arr[2]}</li>*/}
        {newObj}
    </ul>
  );

}



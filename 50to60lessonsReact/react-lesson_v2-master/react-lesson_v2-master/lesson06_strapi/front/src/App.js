import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_POST } from './data/pablicApi'

import './index.css'

function App() {
  const [out, setOut] = useState();



  const { data } = useQuery(GET_POST)

  console.log(data?.posts);

  useEffect(() => {
    setOut(data?.posts.data.attributes)
    console.log(out);
  }, [data?.posts])

  function singItem() {
    setOut("kdjgnksdfjng ksdfjngk sdfnks")
  }

  const Post = data?.posts.data.map(item => (
    <div onClick={() => singItem(item)} className='carts__item'>
      <h2 className='carts__name'>{item.attributes.name}</h2>
      <p className='carts__name'>{item.attributes.description}</p>
      <p>Категорія: {item.attributes.category}</p>
    </div>
  ))

  return (
    <div className="App">
      <h2>My first Apollo app 🚀</h2>
      <div className='carts'>
        {Post}
      </div>
    </div>
  );
}

export default App;

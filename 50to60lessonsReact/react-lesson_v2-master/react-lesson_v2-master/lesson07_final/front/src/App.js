import { Route, Routes } from "react-router-dom";
import { useQuery } from '@apollo/client';

import { GET_POST } from './data/pablicApi'



import Header from './component/header'
import SinglPost from './component/singPage'


import Home from './page/home_v2'
import Contact from './page/contsct'
import About from './page/aboutus'

import './index.css'

export default function App() {

  const { loading, error, data } = useQuery(GET_POST)

  console.log(data?.posts.data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {data?.posts.data && data?.posts.data.map(item => <Route key={item.id} path={`/post/${item.attributes.category}/${item.id}`} element={<SinglPost item={item} />} />)}
          {/* {data?.posts.data && data?.posts.data.map(item => <Route key={item.id} path={`/post/${item.attributes.category}`} element={<Category item={item} />} />)} */}
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
    </>
  )

}



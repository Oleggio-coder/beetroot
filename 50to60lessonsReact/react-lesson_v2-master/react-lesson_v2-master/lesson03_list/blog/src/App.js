import {Blog} from './data/Blog'
import NavBlog from "./component/navBlog/Nav";
import Post from "./component/post/Post";

import './style.scss'

export default function App() {

    const navBlog = Blog.map(item => <NavBlog key={item.id} item={item} />)
    const newPost = Blog.map(item => <Post key={item.id} item={item} />)

  return (
    <main>
     <nav>
         <ul className='nav__container'>
             {navBlog}
         </ul>
     </nav>

        <section className='blog'>
            {newPost}
        </section>
    </main>
  );
}



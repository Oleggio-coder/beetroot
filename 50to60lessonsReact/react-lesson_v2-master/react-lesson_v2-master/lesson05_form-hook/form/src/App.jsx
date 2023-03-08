import { Route, Routes } from 'react-router-dom'

import Header from './component/header/Header'

import Home from './Pages/Home'
import About from './Pages/AboutUs'
import Contact from './Pages/Contact'


function App() {
  return (
    <div >
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;

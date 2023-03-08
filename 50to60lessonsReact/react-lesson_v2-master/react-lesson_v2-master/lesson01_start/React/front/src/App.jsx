import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

import CatImg from './img/cat.webp'

function App(){
    return (
        <>
            <Header />
            <section>
                <h3>Test</h3>
                <img src={CatImg} width='200' alt="img"/>
            </section>
            <Footer />
        </>
    )
}

export default App



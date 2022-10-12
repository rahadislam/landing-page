import About from './About/About';
import './App.css';
import Banner from './Banner/Banner';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Cart></Cart>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/HomePage/Navbar/NavBar'
import Jumbotron from './components/HomePage/Jumbotron/Jumbotron'
import Cards from './components/HomePage/Cards/Cards'
import Comingsoon from './components/HomePage/SecondJumbotron/Comingsoon';
import Footer from './components/HomePage/Footer/Footer'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Jumbotron/>
        <Cards/>
        <Comingsoon/>
        <Footer/>
    </div>
  );
}

export default App;

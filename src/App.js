import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/HomePage/Navbar/NavBar'
import Jumbotron from './components/HomePage/Jumbotron/Jumbotron'
import Cards from './components/HomePage/Cards/Cards'
import Comingsoon from './components/HomePage/SecondJumbotron/Comingsoon';
import Footer from './components/HomePage/Footer/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Fruits from './components/CardComponents/Fruits&Vegetables/Fruits'

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar/>
        <Route path="/" exact>
          <Jumbotron/>
          <Cards/>
          {/* <Comingsoon/> */}
        </Route>
        <Route path='/fruits' exact render={() => <Fruits/>} />
        <Footer/>
        </Router>
    </div>
  );
}

export default App;

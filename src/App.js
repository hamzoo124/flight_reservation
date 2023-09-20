
import './App.css';
import Header from './components/header';
import Body from './components/body';
import'./components/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import Card from './components/Cards';
import Places from './components/Places';
import User from './components/User';
import Footer from './components/Footer'
import Signup from './components/Signup';
import Depart from './components/Departing';



function App() {
  return (
  <div>
    {/* <Signup/> */}
    <Header/>
    <Body/>
     <Card/>
     <Places/>
     <User/>
     <Footer/> 
     {/* <Hero/> */}

  </div>
  );
}

export default App;

import './App.css';
import Cards from './components/cards';
import DashBoard from './components/DashBoard';
import Events from './components/Events';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import Header from './components/header';
import Card from './components/card';
import EventPage from './components/EventPage';
import Eventdetails from './components/eventdetails'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <NavBar />
              <DashBoard />
              <Events />
              <Cards />
            </div>
          } />
          <Route path="/about" element={
            <div className='about-main'>
              <Header />
              <NavBar />
              <Hero />
              <Card />
            </div>
          } />
          <Route path="/events" element={
            <>
              <Header />
              <NavBar />
              <EventPage />
              
            </>
          } />
           <Route path="/eventdetails" element={
            <>
              <Header />
              <NavBar />
              <Eventdetails 
              title="ROBO RACE"
              />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

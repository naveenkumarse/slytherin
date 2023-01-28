import './App.css';
import Card from './components/cards';
import DashBoard from './components/DashBoard';
import Events from './components/Events';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import Header from './components/header';
import About from './components/card';
import EventPage from './components/EventPage';
import Eventdetails from './components/eventdetails'
import Eventdetails2 from './components/eventdetails2'
import Eventdetails3 from './components/eventdetails3'
import Eventdetails4 from './components/eventdetails4'
import Eventdetails5 from './components/eventdetails5'
import Eventdetails6 from './components/eventdetails6'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Footer from './components/footer';
import DevNav from './components/devNav';
import Developer from './components/developer';
import History from './components/history';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <NavBar />
              <DashBoard />
              <Events />
              <About />
              <Footer/>
              <Card />
              <DevNav/>
            </div>
          } />
          <Route path="/about" element={
            <div className='about-main'>
              <Header />
              <NavBar />
              <Hero />
              <Card />
              <Footer/>
              <DevNav/>
            </div>
          } />
          <Route path="/previous_year_events" element={
            <div >
              <Header />
              <NavBar />
              <Card />
              <History />
              <Footer/>
              <DevNav/>
            </div>
          } />
          <Route path="/events" element={
            <>
              <Header />
              <NavBar />
              <EventPage />
              <Card />
              <Footer/>
              <DevNav/>
            </>
          } />
          <Route path="/developer" element={
            <>
              <Header />
              <NavBar />
              <Developer />
            </>
          } />
           <Route path="/eventdetails1" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails />
              <Card />
              <DevNav/>
            </>
          } />
           <Route path="/eventdetails2" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails2 />
              <Card />
              <DevNav/>
            </>
          } />
           <Route path="/eventdetails3" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails3 />
              <Card />
              <DevNav/>
            </>
          } />
           <Route path="/eventdetails4" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails4 />
             <Card />
             <DevNav/>
            </>
          } />
           <Route path="/eventdetails5" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails5 />
             <Card />
             <DevNav/>
            </>
          } />
           <Route path="/eventdetails6" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails6 />
              <Card />
             <DevNav/>
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

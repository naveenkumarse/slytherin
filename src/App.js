import './App.css';
// import Cards from './components/cards';
import DashBoard from './components/DashBoard';
import Events from './components/Events';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import Header from './components/header';
import Card from './components/card';
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
import ComboOffer from './components/combo_offer';
// import Footer from './components/footer';


function App() {
  return (
    <div style={{marginBottom:"50px"}}>
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <NavBar />
              <DashBoard />
              <ComboOffer/>
              <Events />
              <Card />
              {/* <Footer/> */}
              {/* <Cards /> */}
            </div>
          } />
          <Route path="/about" element={
            <div className='about-main'>
              <Header />
              <NavBar />
              <Hero />
            </div>
          } />
          <Route path="/previous_year_events" element={
            <div >
              <Header />
              <NavBar />
            </div>
          } />
          <Route path="/events" element={
            <>
              <Header />
              <NavBar />
              <EventPage />
              
            </>
          } />
           <Route path="/eventdetails1" element={
            <>
              <Header />
              <NavBar />
              <Eventdetails />
            </>
          } />
           <Route path="/eventdetails2" element={
            <>
              <Header />
              <NavBar />
              <Eventdetails2 />
            </>
          } />
           <Route path="/eventdetails3" element={
            <>
              <Header />
              <NavBar />
              <Eventdetails3 />
            </>
          } />
           <Route path="/eventdetails4" element={
            <>
              <Header />
              <NavBar />
              <Eventdetails4 />
            </>
          } />
           <Route path="/eventdetails5" element={
            <>
              <Header />
              <NavBar />
              <Eventdetails5 />
            </>
          } />
           <Route path="/eventdetails6" element={
            <>
              <Header />
              <NavBar />
              <Eventdetails6 />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

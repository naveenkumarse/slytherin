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
import Footer from './components/footer';
import History from './components/history';


import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";



function App() {
  return (
    <div >
      <HashRouter>
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
            </div>
          } />
          <Route path="/about" element={
            <div className='about-main'>
              <Header />
              <NavBar />
              <Hero />
              <Card />
              <Footer/>
            </div>
          } />
          <Route path="/previous_year_events" element={
            <div >
              <Header />
              <NavBar />
              <Card />
              <History />
              <Footer/>
            </div>
          } />
          <Route path="/events" element={
            <>
              <Header />
              <NavBar />
              <EventPage />
              <Card />
              <Footer/>
            </>
          } />
           <Route path="/eventdetails1" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails />
              <Card />
            </>
          } />
           <Route path="/eventdetails2" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails2 />
              <Card />
            </>
          } />
           <Route path="/eventdetails3" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails3 />
              <Card />
            </>
          } />
           <Route path="/eventdetails4" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails4 />
             <Card />
            </>
          } />
           <Route path="/eventdetails5" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails5 />
             <Card />
            </>
          } />
           <Route path="/eventdetails6" element={
             <>
              <Header />
              <NavBar />
              <Eventdetails6 />
              <Card />
            </>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

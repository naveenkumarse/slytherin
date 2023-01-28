import './App.css';
import Card from './components/cards';
import DashBoard from './components/DashBoard';
import Events from './components/Events';
import NavBar from './components/NavBar';
import Hero from './components/about/hero';
import Header from './components/header';
import About from './components/card';
import EventPage from './components/EventPage';
import Footer from './components/footer';
import History from './components/history/history';


import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import PrevEvents from './components/history/previousEvents';
import Eventdetails1 from './components/events/event_maze_solver';
import Eventdetails2 from './components/events/event_robo_war';
import Eventdetails3 from './components/events/event_robo_soccer';
import Eventdetails4 from './components/events/event_line_follower';
import Eventdetails5 from './components/events/event_robo_race';
import Eventdetails6 from './components/events/event_workshop';
import OfficeBearerList from './components/about/OfficeBearerList';



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
              <Footer />
              <Card />
            </div>
          } />
          <Route path="/about" element={
            <div className='about-main'>
              <Header />
              <NavBar />
              <Hero />
              <OfficeBearerList/>
              <Footer />
            </div>
          } />
          <Route path="/previous_year_events" element={
            <div >
              <Header />
              <NavBar />
              <History />
              <PrevEvents />
              <Footer />
            </div>
          } />
          <Route path="/events" element={
            <>
              <Header />
              <NavBar />
              <EventPage />
              <Card />
              <Footer />
            </>
          } />
          <Route path="/eventdetails1" element={
            <>
              <Header />
              <NavBar />
              <Eventdetails1 />
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

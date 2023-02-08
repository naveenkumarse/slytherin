import './App.css';
import DashBoard from './components/DashBoard';
import Events from './components/Events';
import NavBar from './components/NavBar';
import Hero from './components/about/hero';
import Header from './components/header';
import About from './components/card';
import EventPage from './components/EventPage';
import Footer from './components/footer';
import History from './components/history/history';
import PrevEvents from './components/history/previousEvents';
import Eventdetails1 from './components/events/event_maze_solver';
import Eventdetails2 from './components/events/event_robo_war';
import Eventdetails3 from './components/events/event_robo_soccer';
import Eventdetails4 from './components/events/event_line_follower';
import Eventdetails5 from './components/events/event_robo_race';
import Eventdetails6 from './components/events/event_workshop';
import OfficeBearerList from './components/about/OfficeBearerList';
import Marquee from './components/marquee';
import Developer from './components/developer';
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
              <Footer />
              <Marquee />
            </div>
          } />
          <Route path="/about" element={
            <div className='about-main'>
              <Header />
              <NavBar />
              <Hero />
              <OfficeBearerList />
              <Footer />
              <Marquee />
            </div>
          } />
          <Route path="/previous_year_events" element={
            <div >
              <Header />
              <NavBar />
              <History />
              <PrevEvents />
              <Footer />
              <Marquee />
            </div>
          } />
          <Route path="/events" element={
            <>
              <Header />
              <NavBar />
              <EventPage />
              <Footer />
              <Marquee />
            </>
          } />
          <Route path="/eventdetails1" element={
            <>
              <div className='mb-12'>
                <Header />
                <NavBar />
                <Eventdetails1 />
              </div>
              <Marquee />
            </>
          } />
          <Route path="/eventdetails2" element={
            <>
              <div className='mb-12'>
                <Header />
                <NavBar />
                <Eventdetails2 />
              </div>
              <Marquee />
            </>
          } />
          <Route path="/eventdetails3" element={
            <>
              <div className='mb-12'>
                <Header />
                <NavBar />
                <Eventdetails3 />
              </div>
              <Marquee />
            </>
          } />
          <Route path="/eventdetails4" element={
            <>
              <div className='mb-12'>
                <Header />
                <NavBar />
                <Eventdetails4 />
              </div>
              <Marquee />
            </>
          } />
          <Route path="/eventdetails5" element={
            <>
              <div className='mb-12'>
                <Header />
                <NavBar />
                <Eventdetails5 />
              </div>
              <Marquee />
            </>
          } />
          <Route path="/eventdetails6" element={
            <>
              <div className='mb-12'>
                <Header />
                <NavBar />
                <Eventdetails6 />
              </div>
              <Marquee />
            </>
          } />
          <Route path="/dev" element={
            <div className='h-screen'>
              <Header />
              <NavBar />
              <Developer />
            </div>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

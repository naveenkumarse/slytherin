import './App.css';
import Cards from './components/cards';
import DashBoard from './components/DashBoard';
import Events from './components/Events';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <DashBoard />
      <Events />
      <Cards />
    
    </div>
  );
}

export default App;

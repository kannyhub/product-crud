import Navbar from './components/Navbar.js'
import Home from './components/Home.js';

function App() {
  const API_URL = 'http://127.0.0.1:8000/api';
  return (
    <div className="App">
      <Navbar/>
      <Home API_URL={API_URL}/> 
    </div>
  );
}

export default App;

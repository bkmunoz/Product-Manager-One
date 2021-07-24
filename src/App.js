import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/HomeAddProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
      </Router>
    </div>
  );
}

export default App;

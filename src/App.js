import logo from './logo.svg';
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer';
import MealContainer from './Containers/MealContainer';
import RestaurantForm from './Containers/RestaurantForm'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/restaurants" component={RestaurantContainer} />
      </Router>
      {/* <RestaurantContainer /> */}
      {/* <MealContainer /> */}
      {/* <RestaurantForm /> */}

    </div>
  );
}

export default App;

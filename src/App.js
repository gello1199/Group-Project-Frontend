import logo from './logo.svg';
import './App.css';
import Meals from './Components/Meals';
import RestaurantContainer from './Containers/RestaurantContainer';

function App() {
  return (
    <div className="App">
    <RestaurantContainer />
    <Meals />
    </div>
  );
}

export default App;

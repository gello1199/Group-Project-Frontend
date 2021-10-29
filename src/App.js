import logo from './logo.svg';
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer';
import MealContainer from './Containers/MealContainer';

function App() {
  return (
    <div className="App">
      <RestaurantContainer />
      <MealContainer />
    </div>
  );
}

export default App;

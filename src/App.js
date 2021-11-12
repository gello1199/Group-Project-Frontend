import logo from './logo.svg';
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer';
import MealContainer from './Containers/MealContainer';
import RestaurantForm from './Containers/RestaurantForm'

function App() {
  return (
    <div className="App">
      <RestaurantContainer />
      <MealContainer />
      <RestaurantForm />
    </div>
  );
}

export default App;

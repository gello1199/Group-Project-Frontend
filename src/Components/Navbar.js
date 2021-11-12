import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function Navbar () {
    return (
    <div>
        
        <NavLink 
        to='/'
        exact
        
        >Home
        </NavLink>
        <NavLink 
        to='/restaurants'
        exact
        
        >Restaurants
        </NavLink>
        
    </div>)
}

export default Navbar
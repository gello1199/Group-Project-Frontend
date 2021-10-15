import React from "react";
import Restaurants from '../Components/Restaurants';


class RestaurantContainer extends React.Component {
    state = {
        restaurants: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurants')
        .then(resp => resp.json())
        .then(data => {debugger})
    }

    makeRestaurantCard() {
        return this.state.restaurants.map(r => <Restaurants name={r.name} address={r.address} website={r.website} image={r.image} phone_number={r.phone_number} />)
        
    }

    render() {
        return(
            <div>
            {this.makeRestaurantCard()}
            </div>
        )
    }
}

export default RestaurantContainer
import React from "react";
import Restaurants from '../Components/Restaurants';


class RestaurantContainer extends React.Component {
    state = {
        restaurants: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurants')
            .then(resp => resp.json())
            .then(data => {
                return this.setState({ restaurants: data.data })
            })
    }

    makeRestaurantCard() {
        return this.state.restaurants.map(r => <Restaurants {...r.attributes} />)

    }

    render() {
        return (
            <div>
                {this.makeRestaurantCard()}
            </div>
        )
    }
}

export default RestaurantContainer
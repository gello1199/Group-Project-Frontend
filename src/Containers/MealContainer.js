import React from 'react';
import Meals from '../Components/Meals';

class MealContainer extends React.Component {
    state = {
        meals: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/meals')
            .then(resp => resp.json())
            .then(data => {
                return this.setState({ meals: data.data })
            })
    }

    makeMealsCard() {
        return this.state.meals.map(m => <Meals {...m.attributes} />)
    }


    render() {
        return (
            <div>{this.makeMealsCard()}</div>
        )
    }
}

export default MealContainer;
import React from "react";


export default class RestaurantForm extends React.Component {
    state = {
        name: "",
        address: "",
        phone_number: "",
        image: "",
        website: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render (){
        return(
            <div>
                <h1>Create a New Restaurant</h1>
                <form>
                    <label>Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} /> <br/>
                    <label>Address: </label>
                    <input onChange={this.handleChange} type="text" name="address" value={this.state.address} /> <br/>
                    <label>Phone Number: </label>
                    <input onChange={this.handleChange} type="text" name="phone_number" value={this.state.phone_number} /> <br/>
                    <label>Image: </label>
                    <input onChange={this.handleChange} type="text" name="image" value={this.state.image} /> <br/>
                    <label>Website: </label>
                    <input onChange={this.handleChange} type="text" name="website" value={this.state.website} /> 

                </form>
            </div>
        )
    }

}
function Restaurants(props) {
    return (
        <div>
        <h1>List of Restaurants</h1>
            <ul>
                <li>{props.name}</li>
                <li>{props.address}</li>
                <li>{props.phone_number}</li>
                <li>{props.website}</li>
                <li>{props.image}</li>
            </ul>
        </div>
    )
}

export default Restaurants
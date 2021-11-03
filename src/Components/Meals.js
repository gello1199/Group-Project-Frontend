function Meals(props) {
    return (
        <div>
            <h1>List of Meals</h1>
            <ul>
                <li>{props.name}</li>
                <li>{props.price}</li>
                <li>{props.description}</li>
                <li>{props.img}</li>
                <li>{props.allergies}</li>
            </ul>
        </div>
    )
}

export default Meals
import React, { Component } from "react";

class Card extends Component {

    state = {
        name: "",
        email: "",
        birthday: "",
        address: "",
        phone: "",
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://randomuser.me/api/?results=1");
            const data = await response.json();
            const object = data.results[0];
            this.setState({
                name: object.name,
                email: object.email,
                birthday: object.dob.date,
                address: object.location.street,
                phone: object.phone,
            })
        } catch (error) {
            return error;
        }
    }

    render() {
        return (
            <div className="cardWrapper">
                <div className="cardInner">
                    <div className="cardTop">
                        Hi my name is {this.state.name.first} {this.state.name.last}
                    </div>
                    <div className="cardTop">
                        Text
                    </div>
                </div>
            </div>
        )
    }
}


export default Card;
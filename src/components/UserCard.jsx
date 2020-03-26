import React, { Component } from "react";
import './UserCard.css';

class UserCard extends Component {

    state = {
        name: "", // contains title, first, last
        email: "",
        birthday: "",
        address: "", // contains number, name
        phone: "",
        picture: "", // contains large, medium, thumbnail
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://randomuser.me/api/?results=1");
            const data = await response.json();
            const object = data.results[0];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = {
                year: new Date(object.dob.date).getFullYear(),
                month: months[new Date(object.dob.date).getMonth()],
                day: new Date(object.dob.date).getDate()
            };
            console.log(date);
            this.setState({
                name: object.name, // contains title, first, last
                email: object.email,
                birthday: date,
                address: object.location.street, // contains number, name
                phone: object.phone,
                picture: object.picture, // contains large, medium, thumbnail
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
                        <img src={this.state.picture.large}></img>
                        <p>Hi, my name is </p>
                        <em>{this.state.name.first} {this.state.name.last}</em>
                    </div>
                    <div className="cardBottom">
                        <p><em>Birthday:</em> {this.state.birthday.month} {this.state.birthday.day}</p>
                        <p><em>Email:</em> {this.state.email}</p>
                        <p><em>Phone:</em> {this.state.phone}</p>
                        <p><em>Address:</em> {this.state.address.number} {this.state.address.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserCard;
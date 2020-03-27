import React, { Component } from "react";
// import './UserCard.css';
import "bulma/css/bulma.css";
import { Card, CardImage, CardContent, Image, Media, MediaLeft, MediaContent, Title, Subtitle, Content } from "bloomer";

class UserCard extends Component {

    state = {
        name: "", // contains title, first, last
        email: "",
        birthday: "",
        address: "", // contains number, name
        phone: "",
        picture: "", // contains large, medium, thumbnail
        username: "",
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
            let username = (
              object.name.first.slice(0, 1) + object.name.last
            ).toLowerCase();
            this.setState({
                name: object.name, // contains title, first, last
                email: object.email,
                birthday: date,
                address: object.location.street, // contains number, name
                phone: object.phone,
                picture: object.picture, // contains large, medium, thumbnail,
                username: username,
            })
        } catch (error) {
            return error;
        }
    }

    render() {
        return (
          <Card isDisplay="inline-block">
            <CardImage isSize={2}>
              <Image src={this.state.picture.large} />
            </CardImage>
            <CardContent>
              <Media>
                <MediaLeft isDisplay="flex" isFlex="center">
                  <Image isSize="48x48" src={this.state.picture.large} />
                </MediaLeft>
                <MediaContent>
                  <Title isSize={4}>
                    {this.state.name.first} {this.state.name.last}
                  </Title>
                  <Subtitle isSize={6}>@{this.state.username}</Subtitle>
                </MediaContent>
              </Media>
              <Content hasTextAlign="left">
                <p>
                  <b>Birthday:</b> {this.state.birthday.month}{" "}
                  {this.state.birthday.day}
                </p>
                <p>
                  <b>Email:</b> {this.state.email}
                </p>
                <p>
                  <b>Phone:</b> {this.state.phone}
                </p>
                <p>
                  <b>Address:</b> {this.state.address.number}{" "}
                  {this.state.address.name}
                </p>
              </Content>
            </CardContent>
          </Card>
        );
    }
}

export default UserCard;
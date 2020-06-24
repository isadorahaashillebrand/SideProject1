import React from "react";
import { Card, Button } from "react-bootstrap";
import "./UserCard.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      name: this.props.user.name,
      email: this.props.user.email,
      street: this.props.user.address.street,
      city: this.props.user.address.city,
      company: this.props.user.company.name,
      website: this.props.user.website,
      phone: this.props.user.phone,
    };
  }

  render() {
    const {
      id,
      username,
      street,
      name,
      email,
      city,
      company,
      website,
      phone,
    } = this.state;
    return (
      <div>
        <div className="UserCard">
          <Card>
            <div className="input">
              <Card.Text>
                <spam className="title">Id User:</spam> {id}
              </Card.Text>
            </div>
            <div className="input">
              <Card.Text>
                <spam className="title">Name:</spam> {name}
              </Card.Text>
            </div>
            <div className="input">
              <Card.Text>
                <spam className="title">UserName:</spam> {username}
              </Card.Text>
            </div>
            <div className="input">
              <Card.Text>
                <spam className="title">Contact:</spam>
                <ul className="contact">
                  <li>
                    <spam className="title2">Phone:</spam> {phone}
                  </li>
                  <li>
                    <spam className="title2">E-mail:</spam> {email}
                  </li>
                  <li>
                    <spam className="title2">Website:</spam> {website}
                  </li>
                </ul>
              </Card.Text>
            </div>
            <div className="input">
              <Card.Text>
                <spam className="title">Address:</spam>
                <ul className="address">
                  <li>
                    <spam className="title2">City:</spam> {city}
                  </li>
                  <li>
                    <spam className="title2">Street:</spam> {street}
                  </li>
                </ul>
              </Card.Text>
            </div>
            <div className="input">
              <Card.Text>
                <spam className="title">Company Name:</spam> {company}
              </Card.Text>
            </div>
            <Button onClick={() => this.props.deleteUser(id)}>Delete User</Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default UserCard;

import React from "react";
import { Card, Button } from "react-bootstrap";
import "./UserCard.css";
import { CardBody } from "reactstrap";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      name: this.props.user.name,
      email: this.props.user.email,
      website: this.props.user.website,
      phone: this.props.user.phone,
    };
  }

  render() {
    const {
      id,
      username,
      name,
      email,
      website,
      phone,
    } = this.state;
    return (
      <div>
        <div className="UserCard">
          <Card style={{ width: "25rem" }}>
            <CardBody>
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
              <Button onClick={() => this.props.deleteUser(id)}>
                Delete User
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default UserCard;

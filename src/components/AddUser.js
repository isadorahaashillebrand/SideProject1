import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./AddUser.css";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      website: "",
      phone: "",
    };
  }

  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    this.props.addUser(this.state);
    this.setState({
      username: "",
      name: "",
      email: "",
      website: "",
      phone: "",
    });
    event.preventDefault();
  };

  render() {
    const { username, name, email, website, phone } = this.state;
    return (
      <div className="AddUser">
        <Form onSubmit={this.handleSubmit} style={{ width: "30rem" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Name"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                placeholder="UserName"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row >
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={phone}
                onChange={this.handleChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="000-000-0000"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="xxxx@xxx.com"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Website:</Form.Label>
            <Form.Control
              style={{ width: "30rem"}}
              type="text"
              name="website"
              value={website}
              onChange={this.handleChange}
              placeholder="wwww.xxxxx.com"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddUser;

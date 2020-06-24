import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    // Send the request
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      // Extract the DATA from the received response
      .then((response) => {
        return response.data;
      })
      // Use this data to update the state
      .then((dataresult) => {
        console.log(dataresult);
        this.setState({ user: dataresult });
      });
  }

  deleteUser = (id) => {
    const users = this.state.user;
    let deleteUser = users.filter((user) => user.id !== id);
    this.setState({ user : deleteUser })
  }

  render() {
    return (
      <div className="User">
        {this.state.user.map((person) => (
          <div className="inputUser">
            <UserCard key={person.id} user={person} deleteUser={this.deleteUser}/>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
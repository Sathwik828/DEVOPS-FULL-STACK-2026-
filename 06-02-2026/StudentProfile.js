import React, { Component } from "react";
import "./style.css";

class StudentProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      loading: true
    };
  }

  componentDidMount() {
    console.log("Component Mounted");

    // 🔹 Fetch MORE students → more rows
    fetch("https://jsonplaceholder.typicode.com/users?_limit=9")
      .then(response => response.json())
      .then(data => {
        this.setState({
          students: data,
          loading: false
        });
      });
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    if (this.state.loading) {
      return <h3 className="loading">Loading student data...</h3>;
    }

    return (
      <div className="profile-grid">
        {this.state.students.map(student => (
          <div className="profile-card" key={student.id}>
            <h2>{student.name}</h2>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>City:</strong> {student.address.city}</p>
            <p><strong>Organization:</strong> {student.company.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default StudentProfile;

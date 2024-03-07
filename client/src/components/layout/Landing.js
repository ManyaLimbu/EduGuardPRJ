import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Creates the landing page that has 2 buttons Register and Login
 * Button presses redirect to the correct component
 */
class Landing extends Component {

  render() {
    return (
      <div style={{ height: "80vh" }} className="container valign-wrapper" >
        <img width={"500vh"} src="https://examonline.in/wp-content/uploads/2023/08/featured1.png"></img>
        <div className="row">
          <div className="col s12 center-align">
            <h4>
                <b>Secure </b>your online exams with{" "}
              <span style={{ fontFamily: "Consolas" }}><b>EduGuard</b></span> and ensure cheating free exams!
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create an exam, share unique code with students and monitor them in real time from the dashboard. It's this simple and easy to use!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-5"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-5"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
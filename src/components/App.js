import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">      <h1 data-ns-test="project-name">Login Authentication</h1>
      <p data-ns-test="project-description">In login Authentication, there are two phases for login first is sign up then the login page. On the signup page user name will be a minimum of 6 characters and no space allowed and a password minimum of 6 lengths and one capital letter and one small letter also one special character is compulsory for password validation. When a user first-time signup the user name and password will be stored in local storage and it will help for login also one thing is important when the user enters their username and password and if anyone is wrong then show an alert that the password is wrong or invalid data. After successful login opens a new page here page shows the user name in Capital letters.</p></div>
  )
}


export default App;

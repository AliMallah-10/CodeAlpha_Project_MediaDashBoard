function login() {
  var email = document.forms["loginForm"]["email"].value;
  var password = document.forms["loginForm"]["password"].value;

  // Retrieve user data from localStorage
  var storedUserData = JSON.parse(localStorage.getItem("userData"));

  if (
    storedUserData &&
    storedUserData.email === email &&
    storedUserData.password === password
  ) {
    // Display success message
    document.getElementById("loginMessage").innerHTML = "Success";

    // Delay redirection by a short interval to ensure the message is displayed
    setTimeout(function () {
      // Redirect to dashboard
      window.location.href = "../DashBoard/dashBoard.html";
    }, 500); // Adjust the delay time as needed

    // Prevent form submission
    return false;
  } else {
    // Display error message
    document.getElementById("loginMessage").innerHTML =
      "Invalid email or password";
    return false;
  }
}

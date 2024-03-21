function signUp() {
  var email = document.forms["signupForm"]["email"].value;
  var phone = document.forms["signupForm"]["phone"].value;
  var password = document.forms["signupForm"]["password"].value;
  var confirmPassword = document.forms["signupForm"]["confirmPassword"].value;

  if (password !== confirmPassword) {
    document.getElementById("signupMessage").innerHTML =
      "Passwords do not match";
    return false;
  }

  // Store user data in localStorage
  var userData = {
    email: email,
    phone: phone,
    password: password,
  };
  localStorage.setItem("userData", JSON.stringify(userData));

  return true;
}

class Authentication {
  login() {
    console.log("Logged in");
  }

  resetPassword() {
    console.log("reset password done");
  }

  signUp() {
    console.log("signedup");
  }

  logout() {
    console.log("logged out");
  }
}

const auth = new Authentication();

auth.login();
auth.logout();
auth.signUp();
auth.resetPassword();

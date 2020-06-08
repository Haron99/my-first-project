class User {
    constructor(userName, email, password) {
      this.userName = userName;
      this.userEmail = email;
      this.userPassword = password;
    }
    setUserName(newUserName) {
      this.userName = newUserName;
    }
    setUserEmail(newUserEmail) {
      this.userEmail = newUserEmail;
    }
    setUserPassword(newUserPassword) {
      this.userPassword = newUserPassword;
    }
  }
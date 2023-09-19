class User {
  #id;
  #username = "";
  #firstName = "";
  #lastName = "";
  #email = "";
  #password = "";
  #address = "";
  #expo_push_token = "";
  #user_avatar_pic = "";

  //getters
  get id() {
    return this.#id;
  }

  //setters
  set id(id) {
    this.#id = id;
  }

  set username(username) {
    this.#username = username;
  }

  set firstName(firstName) {
    if (firstName === "") {
      throw new Error(`firstName field of User cannot be empty`);
    }
    this.#firstName = firstName;
  }

  set lastName(lastName) {
    this.#lastName = lastName;
  }

  set email(email) {
    this.#email = email;
  }

  set password(password) {
    this.#password = password;
  }

  set address(address) {
    this.#address = address;
  }

  set expo_push_token(expo_push_token) {
    this.#expo_push_token = expo_push_token;
  }

  set user_avatar_pic(user_avatar_pic) {
    this.#user_avatar_pic = user_avatar_pic;
  }
}

module.exports = User;

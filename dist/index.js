"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const joey = new User("j@jm.com", "joey");
joey.city = "Los Angeles";

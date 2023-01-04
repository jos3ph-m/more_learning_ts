"use strict";
var _User_name;
class User {
    constructor(email, name) {
        // everything is public by default
        _User_name.set(this, void 0);
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
_User_name = new WeakMap();
const joey = new User("j@jm.com", "joey");
joey.city;

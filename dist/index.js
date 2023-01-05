"use strict";
// class User {
//   // everything is public by default
//   public email: string
//   private name: string
//   readonly city: string = ""
//   constructor(email: string, name: string){
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Los Angeles";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
    }
}
const joey = new User("j@jm.com", "joey");
joey.city;

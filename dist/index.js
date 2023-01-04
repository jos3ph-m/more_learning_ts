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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "";
    }
}
const joey = new User("j@jm.com", "joey");
joey.city;

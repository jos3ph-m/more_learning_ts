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

  readonly city: string = ""
  constructor(
    public email: string, 
    public name: string,
    //private userId: string
    ){

  }
}

const joey = new User("j@jm.com", "joey")
joey.city
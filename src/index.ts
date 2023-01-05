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

  private _courseCount = 1;

  readonly city: string = "Los Angeles"
  constructor(
    public email: string, 
    public name: string,
    //private userId: string
    ){

  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }
}

const joey = new User("j@jm.com", "joey")
joey.city
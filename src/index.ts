class User {
  email: string
  name: string
  private readonly city: string = ""
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
}

const joey = new User("j@jm.com", "joey")
joey.city
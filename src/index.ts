class User {
  email: string
  name: string
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
}

const joey = new User("j@jm.com", "joey")
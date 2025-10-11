class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return `${this._email.toUpperCase()}@ybl`
    }
    set email(value){
       this._email = value//we have to use ._ beacuse constructor is also getting and setting nd this get method will also so we use this
    }
     get password(){
        return `${this._password}sqr`
    }

    set password(value){
        this._password = value
    }
}
const aditya=new User("aditya.123","adi")
console.log(aditya)
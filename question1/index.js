// question one

// create a pharmacist class with a method like createPrescription

// create another class for cashier with a method like collectCash

// create a class Manager which extends both cashier and pharmacist classes and it will have methods to manage employees like addEmployee, editEmployee, deleteEmployee....

class Person {
    firstName;
    lastName;
    constructor(fName, lName) {
      this.firstName = fName;
      this.lastName = lName;
    }
  }
  class Pharmacist extends Person {
    constructor(firstName, lastName) {
      super(firstName, lastName)
    }
    createPrescription(person) {
      console.log(`prescription created for ${person.firstName} by ${this.firstName}`)
    }
  }
  class Cashier extends Person {
    constructor(firstName, lastName) {
      super(firstName, lastName)
    }
    collectCash(amount) {
      console.log(`collected kshs ${amount} by ${this.firstName}`)
      return amount
    }
  }
  class Manager extends Pharmacist{
    constructor(firstName, lastName) {
      super(firstName, lastName)
    }
    collectCash(amount){
      console.log(`collected kshs ${amount} by ${this.firstName}`)
      return amount
    }
    manageEmployees(firstName, lastName, employeeID){
      console.log(`${this.firstName} can add/delete/modify user ${firstName}`)
    }
  }
  let person = new Person('first', 'last')
  let pharmacists = new Pharmacist('pharmacist', '1')
  let cashier = new Cashier('cashier', '1')
  let manager = new Manager('manager', '1')
  console.log(pharmacists.createPrescription(person))
  console.log(manager.createPrescription(person))
  console.log(cashier.collectCash(20))
  console.log(manager.collectCash(20))
  console.log(manager.manageEmployees('employee', 'lastName', 231))
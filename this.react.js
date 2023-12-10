// 'use strict';
class Person {
  constructor(name) {
    this.name = name;
    this.display = this.display.bind(this);
  }

  display() {
    console.log(this.name);
  }
}

var foo = new Person('Tran Dung');
foo.display(); //Tran Dung

var display = foo.display;
display(); // Tran Dung

class User {
  constructor(name) {
    this.name = name;
    this.display = this.display.bind(this);
  }
  display() {
    console.log(this.name);
  }
}

const user = new User('User');
// if not bin this :var displayName = user.display; => TypeError: Cannot read properties of undefined (reading 'name')
//Solution

// var displayName = user.display.bind(user);
// displayName();

//Solution line 22

var displayName = user.display;
displayName(); //User

//this
const object = {
  name: 'Tran Van Dung',
  displayName() {
    console.log(this.name);
  },
};

const nam = {
  name: 'Nam',
};
const displayMyname = object.displayName.bind(nam);
displayMyname();

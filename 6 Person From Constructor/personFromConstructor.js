function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("hello");
  };
}

function personFromConstructor(name, age) {
  return new PersonConstructor(name, age);
}

const mike = personFromConstructor("Mike", 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'

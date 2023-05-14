function PersonConstructor() {
  this.greet = function () {
    console.log("hello");
  };
}

const simon = new PersonConstructor();

simon.greet(); // -> Logs 'hello'

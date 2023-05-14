const personStore = {
  greet: function () {
    console.log("hello");
  },
};

function personFromPersonStore(name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore("Sandra", 26);

personStore = {
  ...personStore,
  introduce() {
    console.log("Hi, my name is {person.name}");
  },
};

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

// Chain class
function Chain(name) {
  this.name = name;
  this.totalStores = 0;
  this.locations = [];
}

Chain.prototype.openStore = function (owner, city) {
  var franchise = new Franchise(owner, city);
  this.locations.push(franchise);
  this.totalStores++;
};

Chain.prototype.closeStore = function (city) {
  var franchiseIndex = -1;
  for (var i = 0; i < this.locations.length; i++) {
    if (this.locations[i].city === city) {
      franchiseIndex = i;
      break;
    }
  }

  if (franchiseIndex !== -1) {
    this.locations.splice(franchiseIndex, 1);
    this.totalStores--;
    console.log(this.name + " closed the store in " + city + "!");
  } else {
    console.log(this.name + " doesn't have a store in " + city + ".");
  }
};

// Franchise class
function Franchise(owner, city) {
  this.owner = owner;
  this.city = city;
}

// Example usage
var chain = new Chain("MyChain");
console.log(chain.name); // Output: MyChain
console.log(chain.totalStores); // Output: 0
console.log(chain.locations); // Output: []

chain.openStore("John Doe", "New York");
console.log(chain.totalStores); // Output: 1
console.log(chain.locations); // Output: [Franchise]

chain.openStore("Jane Smith", "Los Angeles");
console.log(chain.totalStores); // Output: 2
console.log(chain.locations); // Output: [Franchise, Franchise]

chain.closeStore("New York"); // Output: MyChain closed the store in New York!
console.log(chain.totalStores); // Output: 1
console.log(chain.locations); // Output: [Franchise]

const buenoBell = new Chain("Bueno Bell");

buenoBell.openStore("Will", "Phoenix");
buenoBell.openStore("Kyle", "Austin");
buenoBell.openStore("Allison", "Wichita");

console.log(buenoBell.totalStores); //should log 3
console.log(buenoBell.locations[0].owner); //should log 'Will'

buenoBell.closeStore("Austin"); // Should log 'Bueno Bell closed the store in Austin.'
buenoBell.closeStore("Maui"); // Should log 'Bueno Bell doesn't have a store in Maui.'

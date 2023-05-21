function Inventory(item, price) {
  this[item] = { price: price, quantity: 1 };
}

Inventory.prototype.addItem = function (item, price) {
  if (!this.hasOwnProperty(item)) {
    this[item] = { price: price, quantity: 1 };
  } else {
    this[item].quantity++;
    this[item].price = price;
  }
};

Inventory.prototype.deleteItem = function (item) {
  if (this.hasOwnProperty(item)) {
    if (this[item].quantity > 0) {
      this[item].quantity--;
      return "Deleted";
    } else {
      return "Nothing to delete";
    }
  }
};

Inventory.prototype.checkItem = function (item) {
  if (this.hasOwnProperty(item)) {
    return this[item];
  } else {
    return "Item is not in inventory";
  }
};

const myInventory = new Inventory("cucumber", 2);

myInventory.addItem("carrot", 1);
console.log(myInventory.checkItem("cucumber")); // Logs: { price: 2, quantity: 1 }
myInventory.addItem("cucumber", 3);
console.log(myInventory.deleteItem("carrot")); // Logs: 'Deleted'
console.log(myInventory.deleteItem("carrot")); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem("radish")); // Logs: 'Item is not in inventory'

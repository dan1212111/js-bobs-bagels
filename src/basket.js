const DEFAULT_CAPACITY = 4;

class Basket {
  constructor() {
    this.basket = [];
    this.basketCapacity = DEFAULT_CAPACITY;
  }

  listOfAvailableBagels(Inventory){
      return Inventory
  }

  customerOrder() {
    return this.basket 
  }

  sumOfBagels () {
      let price = 0
      for(let i=0; i < this.basket.length; i++) {
        price = this.basket[i].price + price
        this.price=price 
      } return this.price 
  }

  selectBagel(description, price) {
    const item = {
      id: this.basket.length + 1,
      type: description,
      quantity: 1,
      price: price,
    };
    if (this.basket.length < this.basketCapacity) {
      this.basket.push(item); 
      return item; 
    } else if (this.basket.length >= this.basketCapacity) {
      return "BASKET IS FULL";
    } 
  }

  removeBagel(id) {
    for (let i = 0; i < this.basket.length; i++) {
      if (id === this.basket[i].id) {
          const removedBagel = this.basket[i]
        this.basket.splice(i, 1);
        return removedBagel
      } 
    } return "ITEM NOT IN BASKET";
  }
}

module.exports = Basket;

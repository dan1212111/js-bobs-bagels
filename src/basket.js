const DEFAULT_CAPACITY = 4;

class Basket {
  constructor() {
    this.basket = [];
    this.basketCapacity = DEFAULT_CAPACITY;
  }

  listOfAvailableBagels(Inventory) {
    return Inventory;
  }

  customerOrder() {
    return this.basket;
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

  sumOfBagels() {
    let price = 0;
    for (let i = 0; i < this.basket.length; i++) {
      price = this.basket[i].price + price;
    }
    return Number(price.toFixed(2));
  }

  totalDiscount() {
    let quantityOnionBagels = 0;
    let quantityPlainBagels = 0;
    let quantityHoneyBagels = 0;

    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].type === "onion") {
        quantityOnionBagels += 1;
      }
      if (this.basket[i].type === "plain") {
        quantityPlainBagels += 1;
      }
      if (this.basket[i].type === "honey") {
        quantityHoneyBagels += 1;
      }
    }
    const discountOnionBagel = (Math.floor(quantityOnionBagels/6)) * 2.49
    const discountPlainBagel = (Math.floor(quantityPlainBagels/12)) * 3.99
    const discountHoneyBagel = (Math.floor(quantityHoneyBagels/6)) * 2.49
    const totalBagelDiscount = discountOnionBagel + discountPlainBagel + discountHoneyBagel
    return Number(totalBagelDiscount.toFixed(2))
  }

  totalCost() {
    return this.sumOfBagels() - this.totalDiscount()
  }

  removeBagel(id) {
    for (let i = 0; i < this.basket.length; i++) {
      if (id === this.basket[i].id) {
        const removedBagel = this.basket[i];
        this.basket.splice(i, 1);
        return removedBagel;
      }
    }
    return "ITEM NOT IN BASKET";
  }
}

module.exports = Basket;

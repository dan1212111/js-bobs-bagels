const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("create a bagel", () => {
    // set up
    const expected = {
      id: 1,
      quantity: 1,
      type: "sesame",
      price: 2.99,
    };
    // execute
    const result = basket.selectBagel("sesame", 2.99);
    // verify
    expect(result).toEqual(expected);
  });

  it("create multiple bagels", () => {
    // set up
    const expectedOne = {
      id: 1,
      quantity: 1,
      type: "sesame",
      price: 2.99,
    };

    const expectedTwo = {
      id: 2,
      quantity: 1,
      type: "nutella",
      price: 3.99,
    };

    const expectedThree = {
      id: 3,
      quantity: 1,
      type: "plain",
      price: 1.99,
    };

    const expectedFour = {
      id: 4,
      quantity: 1,
      type: "honey",
      price: 2.99,
    };
    // execute
    const resultOne = basket.selectBagel("sesame", 2.99);
    const resultTwo = basket.selectBagel("nutella", 3.99);
    const resultThree = basket.selectBagel("plain", 1.99);
    const resultFour = basket.selectBagel("honey", 2.99);
    // verify
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
    expect(resultThree).toEqual(expectedThree);
    expect(resultFour).toEqual(expectedFour);
  });

  it("remove basket item", () => {
    // execute
    basket.selectBagel("sesame", 2.99);
    const expectRemove = basket.selectBagel("nutella", 3.99);
    const result = basket.removeBagel(2);
    // verify
    expect(result).toEqual(expectRemove);
  });

  it("basket is full", () => {
    // set up
    const expectedError = "BASKET IS FULL";

    // execute

    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("nutella", 3.99);
    basket.selectBagel("plain", 1.99);
    basket.selectBagel("honey", 2.99);
    const resultFive = basket.selectBagel("cinnamon", 1.99);

    // verify
    expect(resultFive).toEqual(expectedError);
  });
  it("basket is full", () => {
    // set up
    const expectedError = "BASKET IS FULL";

    basket.basketCapacity = 5;

    // execute

    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("nutella", 3.99);
    basket.selectBagel("plain", 1.99);
    basket.selectBagel("honey", 2.99);
    basket.selectBagel("cinnamon", 1.99);
    const resultSix = basket.selectBagel("garlic", 0.99);

    // verify
    expect(resultSix).toEqual(expectedError);
  });

  it("Item not found in basket", () => {
    // set up
    Inventory = [
      {
        id: 1,
        quantity: 1,
        type: "sesame",
        price: 2.99,
      },

      {
        id: 2,
        quantity: 1,
        type: "nutella",
        price: 3.99,
      },

      {
        id: 3,
        quantity: 1,
        type: "plain",
        price: 1.99,
      },

      {
        id: 4,
        quantity: 1,
        type: "honey",
        price: 2.99,
      },
    ];

    const expectNoItem = "ITEM NOT IN BASKET";

    // execute
    basket.selectBagel(Inventory);
    const result = basket.removeBagel(4);
    // verify
    expect(result).toEqual(expectNoItem);
  });

  it("view bagels and price before selecting", () => {
    // set up
    Inventory = [
      {
        id: 1,
        quantity: 1,
        type: "sesame",
        price: 2.99,
      },

      {
        id: 2,
        quantity: 1,
        type: "nutella",
        price: 3.99,
      },

      {
        id: 3,
        quantity: 1,
        type: "plain",
        price: 1.99,
      },

      {
        id: 4,
        quantity: 1,
        type: "honey",
        price: 2.99,
      },

      {
        id: 5,
        quantity: 1,
        type: "cinnamon",
        price: 1.99,
      },

      {
        id: 6,
        quantity: 1,
        type: "garlic",
        price: 0.99,
      },
    ];
    // execute
    const result = basket.listOfAvailableBagels(Inventory);
    // verify
    expect(result).toEqual(Inventory);
  });

  it("add favourite bagel more then once", () => {
    // set up

    // execute
    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("sesame", 2.99);
    const sameBagels = basket.customerOrder();
    // verify
    expect(sameBagels.length).toEqual(4);
  });

  it("sum of bagels", () => {
    // set up
    basket.basketCapacity = 5;
    // execute
    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("nutella", 3.99);
    basket.selectBagel("plain", 1.99);
    basket.selectBagel("honey", 2.99);
    const sumOfBagels = basket.sumOfBagels();
    // verify
    expect(sumOfBagels).toEqual(11.96);
  });

  it("add favourite bagel more then once", () => {
    // set up

    // execute
    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("sesame", 2.99);
    basket.selectBagel("sesame", 2.99);
    const sameBagels = basket.customerOrder();
    // verify
    expect(sameBagels.length).toEqual(4);
  });

  it("sum of bagles with discount", () => {
    // set up
    basket.basketCapacity = 110;

    for(let i=0; i<12; i++) {
      basket.selectBagel("onion", 2.49); 
    }
    for(let i=0; i<30; i++) {
      basket.selectBagel("plain", 3.99);
    }
    for(let i=0; i<39; i++) {
      basket.selectBagel("honey", 2.49);  
    }

    // execute
    const result = basket.sumOfBagels()
    const resultOne = basket.totalDiscount()
    const resultTwo = basket.totalCost()

    // verify
    expect(result).toEqual(246.69);
    expect(resultOne).toEqual(27.9);
    expect(resultTwo).toEqual(218.79);
  });
});

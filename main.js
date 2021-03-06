// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it


// 1: Show me how to calculate the average price of all items.
function question1() {
  let sum = 0;
  data.forEach(function(element) {
    sum = sum + element.price;
  });
  // return data.price;
  console.log("The average price is $" + (sum / data.length).toFixed(2));

}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let items = []
  for (let i = 0; i < data.length; i++) {
    if ((data[i].price >= 14.00) && (data[i].price <= 18.00)) {
      items.push(data[i].title);
    }
  }
  console.log(items);
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  let curr = []
  for (let i = 0; i < data.length; i++) {
    if ((data[i].currency_code === "GBP")) {
      curr.push(data[i].title, data[i].price)
    }
  }
  console.log(curr);
}

// 4: Display a list of all items who are made of wood.
function question4() {
  data.forEach(function(i) {
    i.materials.forEach(function(items) {
      if (items === "wood")
        console.log(i.title + ' is made of wood.'); // Answer:
    });
  });
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  data.forEach(function(i) {
    if (i.materials.length >= 8)
      console.log(i.title, i.materials.length, i.materials);
  }); // Answer:
}

// 6: How many items were made by their sellers?
// Answer:
function question6() {
  let val = 0
  data.forEach(function(i) {
    if (i.who_made === "i_did") {
      val++
    }
  })
  console.log(val + " items were made by their sellers.") // Answer:
}

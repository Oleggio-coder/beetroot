console.log('\n\nМінімум\n\n');

const shoppingList = [
  {
    name: 'Apples',
    amount: 3,
    purchased: false,
    pricePerUnit: 0.99,
    sum: 2.97
  },
  {
    name: 'Oranges',
    amount: 5,
    purchased: true,
    pricePerUnit: 0.79,
    sum: 3.95
  },
  {
    name: 'Bread',
    amount: 1,
    purchased: false,
    pricePerUnit: 2.49,
    sum: 2.49
  },
  {
    name: 'Milk',
    amount: 2,
    purchased: true,
    pricePerUnit: 1.79,
    sum: 3.58
  }
];

console.log('\n\nВиведення списку:\n\n');

function displayShoppingList() {
  console.log('Shopping list:\n');
  console.log('\nНе придбані продукти:');

  const notPurchased = [];
  const purchased = [];

  shoppingList.forEach(item => {
    if (item.purchased) {
      purchased.push(item);
    } else {
      notPurchased.push(item);
    }
  });

  notPurchased.forEach(item => {
    console.log(`- ${item.name} (${item.amount} units) - $${item.sum.toFixed(2)}`);
  });

  console.log('\n---\n');
  console.log('\nПридбані продукти:\n');

  purchased.forEach(item => {
    console.log(`- ${item.name} (${item.amount} units) - $${item.sum.toFixed(2)}`);
  });
}
displayShoppingList();


console.log('\n\nКупівля продукта:\n\n');

function buyProduct(productName) {
  shoppingList.forEach(item => {
    if (item.name === productName) {
      item.purchased = true;
    }
  });
}
buyProduct('Bread');
displayShoppingList();




console.log('\n\nНорма 2\n\n');

/*
function deleteItem(productName) {
  const updatedShoppingList = shoppingList.filter(item => item.name !== productName);
  shoppingList = updatedShoppingList;
}
*/

/*
function deleteItem(productName) {
  let shoppingList = [...shoppingList];
  shoppingList = shoppingList.filter(item => item.name !== productName);
}
*/

/*
deleteItem('Apples');
displayShoppingList();
*/

function addItem(productName, amount, pricePerUnit) {
  const sum = amount * pricePerUnit;
  shoppingList.push({ name: productName, amount, pricePerUnit, purchased: false, sum });
}

addItem('Pizza', 1, 10.99);
displayShoppingList();




console.log('\n\nМаксимум 1-2\n\n');

function calculateTotalCost() {
  let purchasedTotal = 0;
  let notPurchasedTotal = 0;

  shoppingList.forEach(item => {
    if (item.purchased) {
      purchasedTotal += item.sum;
    } else {
      notPurchasedTotal += item.sum;
    }
  });

  console.log(`Total cost of purchased items: $${purchasedTotal.toFixed(2)}`);
  console.log(`Total cost of not purchased items: $${notPurchasedTotal.toFixed(2)}`);
}

calculateTotalCost();



console.log('\n\nМаксимум 3\n\n');

function displayProductsByCost(sortAscending) {
  console.log('Products:');

  const sortedList = [...shoppingList];  // create a copy of the shopping list array

  // sort the array in ascending or descending order based on the sortAscending parameter
  sortedList.sort((a, b) => (sortAscending ? a.sum - b.sum : b.sum - a.sum));

  sortedList.forEach(item => {
    console.log(`- ${item.name} (${item.amount} units) - $${item.sum.toFixed(2)}`);
  });
}

console.log('\n\nПо возрастанию:\n\n');
displayProductsByCost(true);  // display products in ascending order of cost
console.log('\n\nПо убыванию:\n\n');
displayProductsByCost(false);  // display products in descending order of cost
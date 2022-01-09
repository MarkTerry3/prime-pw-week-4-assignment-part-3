console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
  basket.push(item);
  console.log('Added', item, 'to cart.');
  return true;
}// end addItem


function listItems(){
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}//end listItems


function empty(){
  basket = [];
}// end empty


addItem('eggs');
console.log(basket);
listItems();
//empty();


addItem('milk');
console.log(basket);


listItems();

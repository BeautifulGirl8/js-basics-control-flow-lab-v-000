






function vendingMachine (snackSelection, moneyInserted) {
  if (validateSelection(snackSelection) === false) {
    return 'Please select a valid snack.';
  }
 
  const price = getPrice(snackSelection);
 
  if (price > moneyInserted) {
    return `Please insert more to purchase ${snackSelection}.`;
  }
 
  const change = moneyInserted - price;
 
  return `${snackSelection} dispensed. Your change is ${change}. Thank you!`;
}

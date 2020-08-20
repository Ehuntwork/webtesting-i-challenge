module.exports = {
  success,
  fail,
  repair,
  get,
};



//accepts an item and return enchantment success

// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

function success(item) {
  if(item.enchantment === 20){
    return { ...item};
  } else if(item.enchantment > 20){
    return false
  } else{
    return { ...item, enchantment: item.enchantment+1}
  }
}


//accepts an item and return enchantment failure

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  if(item.enchantment < 15){
      if(item.enchantment <= 5){
        return { ...item, enchantment: 0}
      } else{ return { ...item, enchantment: item.enchantment - 5};
    }
  } else if(item.enchantment > 16){
    return { ...item, enchantment: item.enchantment - 1}
  } else{
    return { ...item}
  }
}


//accepts item to return durability to 100

function repair(item) {
  return { ...item, durability: 100};
}


//stretch
function get(item) {
  return { ...item };
}

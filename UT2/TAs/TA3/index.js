function removeFromArray(array, index) {
  const newArray = [...array]; 
  newArray.splice(index, 1); 
  return console.log(newArray);
}

removeFromArray([1, 2, 3, 4, 5], 2);
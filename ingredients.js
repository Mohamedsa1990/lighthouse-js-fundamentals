const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


let i=0
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++
}

for (let c=0; c<ingredients.length; c++) {
  console.log(ingredients[c]);
}

for (let b=ingredients.length; b>=0; b--) {
  console.log(ingredients[b]);
}
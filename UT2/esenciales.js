// 0 - Bajar repo, hacer hola mundo console.log
console.log("Hola Mundo");
// 2 - Funciones:
// add(firstOperator, secondOperator),
function add(firstOperator, secondOperator) {
    return firstOperator + secondOperator;
}
console.log(add(1, 2));
// subtract(firstOperator, secondOperator),
function subtract(firstOperator, secondOperator) {
    return firstOperator - secondOperator;
}
console.log(subtract(1, 2));
// divide(firstOperator, secondOperator),
function divide(firstOperator, secondOperator) {
    return firstOperator / secondOperator;
}
console.log(divide(4, 2));
// multiply(firstOperator, secondOperator)
function multiply(firstOperator, secondOperator) {
    return firstOperator * secondOperator;
}
console.log(multiply(4, 2));
// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶
function dress(temperature, isRaining) {
    if (isRaining) {
        return "☂️";
    }
    if (temperature < 10) {
        return "🚗";
    }
    if (temperature > 30) {
        return "🩳";
    }
    if (temperature === 30) {
        return "🕶";
    }
}

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)
function calculate(operation, firstOperator, secondOperator) {
    switch (operation) {
        case "+":
            return add(firstOperator, secondOperator);
        case "-":
            return subtract(firstOperator, secondOperator);
        case "/":
            return divide(firstOperator, secondOperator);
        case "*":
            return multiply(firstOperator, secondOperator);
        default:
            return "Operación no válida";
    }
}
console.log(calculate("+", 1, 2));
console.log(calculate("-", 1, 2));
console.log(calculate("/", 4, 2));
console.log(calculate("*", 4, 2));
// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])
function eating(name, foods) {
    return `${name} is eating ${foods.join(", ")}`;
}
console.log(eating("Pepe", ['🍔', '🍟', '🍗']));

// 6 - Funcion
// finalCountDown(count)

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
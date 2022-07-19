

function setIngred(ingred){
    const randNumber = Math.floor(Math.random() * 10);
    switch (randNumber) {
        case 0:
            ingred = `Extra Sauce`;
            break;
        case 1:
            ingred = `Extra Cheese`;
            break;
        case 2:
            ingred = `Mushrooms`;
            break;
        case 3:
            ingred = `Sausage`;
            break;
        case 4:
            ingred = `Pepperoni`;
            break;            
        case 5:
            ingred = `Olives`;
            break;
        case 6:
            ingred = `Peppers`;
            break;
        case 7:
            ingred = `Pineapple`;
            break;
        case 8:
            ingred = `Dates`;
            break;
        case 9:
            ingred = `Special Sauce`;
            break;
        default:
            ingred = "Food Lovers'"
            break;
    }
    return `${ingred}`;
}
function setSize(size){
    const randNumber = Math.floor(Math.random() * 10 / 2);
    switch (randNumber) {
        case 0:
            size = "Personal Pan";
            break;
        case 1:
            size = "NY slice";
            break;
        case 2:
            size = "Small";
            break;
        case 3:
            size = "Medium";
            break;
        case 4:
            size = "Large";
            break;
        default:
            size = "Party Cut";
    }
    return `${size}`;
}
function setPizzaGreeting(greeting) {
    const randNumber = Math.floor(Math.random() * 10 / 2);
    switch (randNumber) {
        case 0:
            greeting = "Good morning";
            break;
        case 1:
            greeting = "Happy holidays";
            break;
        case 2:
            greeting = "Happy Friday";
            break;
        case 3:
            greeting = "Good afternoon";
            break;
        case 4:
            greeting = "Good evening";
            break;
        default:
            greeting = "Hello";
    }
return `${greeting}`;
}

  function pizzagreet(pizzaGreeting){
    let ingred = setIngred();
    let size = setSize();
    let greeting = setPizzaGreeting();

    pizzaGreeting = `${greeting}, I have an order for a ${size} pizza with ${ingred}.`;
   
    return `${pizzaGreeting}`;
  }
console.log(pizzagreet());
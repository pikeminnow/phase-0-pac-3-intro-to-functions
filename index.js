// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
 sayHello();

 function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToGuadalupe();
  sayHelloToLiz();
  sayHelloToSamip();

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }

sayHelloTo("Ashton");

function say(greeting, firstName) {
    console.log("say was called!");
    return `${greeting}, ${firstName}!`;
  }

  console.log(say("Goodbye", "Julio"));
  console.log(say("Julio", "hello"));

  function add(x, y) {
    return x + y;
  }

  console.log(add(1,2));
  console.log(say("hello","lize"));


function setIngred(ingred){
    const randNumber = Math.floor(Math.random() * 10);
    console.log(`ingredient ${randNumber}`);
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
            console.log(`${randNumber}`);
            break;
    }
    return `${ingred}`;
}
function setSize(size){
    const randNumber = Math.floor(Math.random() * 10 / 2);
    console.log(`size ${randNumber}`);
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
    console.log(`greeting ${randNumber}`);
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
    console.log(`${ingred}, ${size}, ${greeting}`);

    pizzaGreeting = `${greeting}, I have an order for a ${size} pizza with ${ingred}.`;
   
    return `${pizzaGreeting}`;
  }
console.log(pizzagreet());
var pizzas =
    '{"pizzas":[' +
    '{"pizzaName": "Pizza da Vinci", "pizzaImage": "../images/pizzadavinci.jpeg", "pizzaDescription": "Onze specialiteit!", "pizzaBasePrice": "9,95"},' +
    '{"pizzaName": "Pizza Roma","pizzaImage": "../images/pizzaroma.jpeg", "pizzaDescription": "Op zijn Italiaans gemaakt!", "pizzaBasePrice":"9,95"},' +
    '{"pizzaName": "Pizza π", "pizzaImage" : "../images/pizzapi.jpg", "pizzaDescription": "Nu met korting", "pizzaBasePrice": "3,14"},' +
    '{"pizzaName": "Pizza Connor", "pizzaImage" : "../images/pizzaconnor.jpeg", "pizzaDescription": "Mayonaise en doperwten!", "pizzaBasePrice": "6,90"},' +
    '{"pizzaName": "Pizza Rogier", "pizzaImage" : "../images/pizzarogier.jpg", "pizzaDescription": "Een pizza van Zweedse bodem, met banaan!", "pizzaBasePrice": "11,95"},' +
    '{"pizzaName": "Pizza Shabala", "pizzaImage" : "../images/pizzashabala.jpg", "pizzaDescription": "Waarom zou je dit ooit in godsnaam kopen?", "pizzaBasePrice": "10,95" }]}';

var text =
    '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

var sauces = ["Tomaat", "Barbeque", "Creme Fraiche", "Mayonaise"];

var toppings = ["Ham", "Kaas"];

var orderedPizzas = [];

var obj = JSON.parse(pizzas);

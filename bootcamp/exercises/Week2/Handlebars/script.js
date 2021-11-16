var source = $('#store-template').html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

// fill our template with information
var newHTML = template({item: "bread", price: "3"});

// append our new html to the page
$('.items').append(newHTML);

var newHTML2 = template({item: "Cheese", price: "10"});

$('.items').append(newHTML2);


const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

var source1 = $('#store-template1').html();

// compile our template html using handlebars
var template1 = Handlebars.compile(source);

// fill our template with information
//var newHTML1 = template({animals);???


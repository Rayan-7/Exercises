
/*$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:980575087057", function(result){
  console.log(result.items[0].volumeInfo.description) //prints A lot of description Text
})*/

/*$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
    console.log(result)
})*/



//ex1
/*function fetch(isbn){


    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${isbn}`,
        success: function(data) {
        console.log(data);
        },

    error: function (xhr, text, error) {
        console.log(text);
    }
});
} 

fetch(9782806269171)*/


//ex2

/*function fetch(queryType,queryValue){


    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function(data) {
        console.log(data);
        },

    error: function (xhr, text, error) {
        console.log(text);
    }
});
} 

fetch("title", "The Wise Man's Fears")*/

//ex3

/*function fetch(queryType,queryValue){


    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function(data) {
        data.items.forEach(d => console.log(` the title : ${d.volumeInfo.title} , the author : ${d.volumeInfo.authors}
        ,the id is ${d.volumeInfo.industryIdentifiers[0].identifier}`))
            
        
        },

        error: function (xhr, text, error) {
            console.log(text);
        }
    });
} 

fetch("title", "The Wise Man's Fears")*/



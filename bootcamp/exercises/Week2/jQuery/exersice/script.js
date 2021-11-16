const addInput = function() {
    $("#my-uls").append('<div><input id="myInput" placeholder="Human Name"><button id="myBtn">Add Human</button></div>')
  };
addInput();

$("#myBtn").on("click", function() {
    const humanName=$("#myInput").val();
    $(".my-lis").append(`<li>${humanName}</li>`)
});


$(".item").on("click",function(){

    if($(this).data("instock")==true)
    {
    const text=$(this).text();
    
    $("#cart").append(`<div>${text}</div>`)
    }
    
});


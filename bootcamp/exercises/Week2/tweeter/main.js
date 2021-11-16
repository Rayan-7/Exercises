const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


$('#posts').on('click','.commentBtn',function () {
    let relevantInputValue = $(this).closest("div").find(".commentField").val()

    tweeter.addComment(relevantInputValue,$(this).closest("div").attr("Id"))
    renderer.renderPosts(tweeter.getPosts())
    
});

$("#posts").on('click','.delete',function () {

    let idPost=$(this).closest("div").attr("Id");
    tweeter.removePost(idPost)
    renderer.renderPosts(tweeter.getPosts())
});

$("#posts").on('click','.delete-comment',function () {

    let idPost=$(this).closest(".post").attr("Id");
    let idComment=$(this).closest("div").attr("Id");
    tweeter.removeComment(idPost,idComment)
    renderer.renderPosts(tweeter.getPosts())


});

function post() {
  
    const twit=$("#input").val();
    tweeter.addPost(twit);
    renderer.renderPosts(tweeter.getPosts())

}


/*$('.deleteP').on('click',function () {
    const txt=$(this)
    console.log(txt)
    //render.renderPosts(tweeter.removePost())
});*/
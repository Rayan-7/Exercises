
const Renderer= function() {

    const renderPosts =function(posts){
        $("#posts").empty()

        for(let post of posts)
        {
            $("#posts").append(`<div class="post" Id=${post.id}>${post.text}</div>`)
            for(let comment of post.comments)
            {
                $(`#${post.id}`).append(`<div Id=${comment.id}><button class='delete-comment'>x</button>${comment.text}</div>`)
            }
            $(`#${post.id}`).append(`<input class='commentField' placeholder= "Got somthing to say?">`)
            $(`#${post.id}`).append(`<button class='commentBtn'">comment</button>`)
            $(`#${post.id}`).append(`<button class='delete'">delete</button>`)

        }
        
}

return {
    renderPosts:renderPosts
}

};








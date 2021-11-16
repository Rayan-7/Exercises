
const Tweeter=function(){
    const posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    },

]
    const addPost= function(string){
            
        const newObj={
            text:string,
            id: "p"+(Number(posts.length)+1),
            comments: []
        }
        posts.push(newObj);

    }
    const getPosts = function(){
        return posts;
    }
    const removePost = function(id){
      for(let post of posts)
      {
          if(post.id==id)
          {
             posts.splice(posts.indexOf(post),1)
          }
      }
    }

    const addComment = function(comment,id) {
        for (let post of posts)
        {
            if(post.id==id){
                let newObj = {
                    text:comment,
                    id:id
                }
                post.comments.push(newObj);
                break;
            }
            
        }
        
    }

    const removeComment = function(id,commentId) {
        for (let post of posts)
        {
            if (post.id==id) {
                for (let comment of post.comments) 
                {
                    if(comment.id==commentId)
                        post.comments.splice(post.comments.indexOf(comment),1) 
                }
            }
        }
    }

    let postIdCounter=3
    let commentIdCounter=7
 return {
     addPost:addPost,
     getPosts:getPosts,
     removePost:removePost,
     addComment:addComment,
     removeComment:removeComment,
     postIdCounter:postIdCounter,
     commentIdCounter:commentIdCounter
     
 }

};

import { Blog } from "./Blog.mjs";
import { addPosts } from "./html.mjs";

let blog = new Blog("https://jsonplaceholder.typicode.com");

// Add functionality to create-post form
let post_title_input = document.getElementById("post-title-input");
let post_body_input = document.getElementById("post-body-input");
let create_submit_button = document.getElementById("create-submit-button");
create_submit_button.addEventListener("click", (event) => {
    event.preventDefault();

    blog.addPost({
        title: post_title_input.value,
        body: post_body_input.value
    });

    post_title_input.value = "";
    post_body_input.value = "";
});


// Initialize posts
let posts_container = document.getElementById("posts");

blog.getPosts()
    .then(posts => addPosts(posts, blog, posts_container));
import { Blog } from "./Blog.mjs";
import { addPosts, getPostInput } from "./html.mjs";

const blog = new Blog("https://jsonplaceholder.typicode.com");

// Add functionality to create-post form
let create_submit_button = document.getElementById("create-submit-button");
create_submit_button.addEventListener("click", (event) => {
    event.preventDefault();

    blog.addPost(getPostInput);

    post_title_input.value = "";
    post_body_input.value = "";
});


// Initialize posts
let posts_container = document.getElementById("posts");

blog.getPosts()
    .then(posts => addPosts(posts, blog, posts_container));

export {
    blog
};
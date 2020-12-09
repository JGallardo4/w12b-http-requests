import { Blog } from "./Blog.mjs";
import {
    addPosts,
    getPostInput,
    clearPostInput
} from "./html.mjs";

const notifier = new AWN();
const blog = new Blog("https://jsonplaceholder.typicode.com/posts/",
    notifier);

// Add functionality to create-post form
let create_submit_button = document.getElementById("create-submit-button");
create_submit_button.addEventListener("click", (event) => {
    event.preventDefault();

    notifier.async(blog.addPost(getPostInput()), "New post has been created");
    clearPostInput();
});


// Initialize posts
let posts_container = document.getElementById("posts");

blog.getPosts()
    .then(posts => addPosts(posts, blog, posts_container, notifier));

export {
    blog
};
import { Blog } from "./Blog.mjs";
import { addPosts } from "./html.mjs";

// Initialize posts
let posts_container = document.getElementById("posts");
let blog = new Blog("https://jsonplaceholder.typicode.com")
blog.getPosts()
    .then(posts => addPosts(posts, blog, posts_container));
import {
    addPosts
} from "./html.mjs";

// Initialize posts
let posts_container = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => addPosts(posts, posts_container));
// Initialize posts
let posts_container = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => addPost(posts, posts_container));

function addPost(posts, container) {
    Array.from(posts).forEach((p) => {
        var post = document.createElement("article");
        post.classList.add("post");
        post.id = p.id;

        var title = document.createElement("h1");
        title.innerText = p.title;
        post.appendChild(title);

        var body = document.createElement("p");
        body.innerText = p.body;
        post.appendChild(body);

        container.appendChild(post);
    });
}
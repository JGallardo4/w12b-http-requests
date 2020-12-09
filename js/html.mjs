import { blog } from "./app.js";

function addPosts(posts, blog, container, notifier) {
    posts.forEach((p) => {
        var post = document.createElement("article");
        post.classList.add("post");
        post.id = p.id;

        var delete_button = document.createElement("button");
        delete_button.classList.add("post-action");
        delete_button.classList.add("delete-button");
        delete_button.value = p.id;
        delete_button.addEventListener("click", (event) => {
            event.preventDefault();
            notifier.async(blog.deletePost(delete_button.value), "Post has been deleted");
        });
        var delete_icon = document.createElement("i");
        delete_icon.classList.add("fa");
        delete_icon.classList.add("fa-window-close");
        delete_icon.ariaHidden = "true";
        delete_button.appendChild(delete_icon);
        post.appendChild(delete_button);

        var edit_button = document.createElement("button");
        edit_button.classList.add("post-action");
        edit_button.classList.add("edit-button");
        var edit_icon = document.createElement("i");
        edit_icon.classList.add("fa");
        edit_icon.classList.add("fa-edit");
        edit_icon.ariaHidden = "true";
        edit_button.appendChild(edit_icon);
        edit_button.addEventListener("click", (event) => {
            event.preventDefault();
            Cookies.set("editPostId", p.id, { sameSite: "strict" });
            window.location.href = "/edit.html";
        });
        post.appendChild(edit_button);

        var title = document.createElement("h1");
        title.classList.add("post-title");
        title.innerText = p.title;
        post.appendChild(title);

        var body = document.createElement("p");
        body.classList.add("post-body");
        body.innerText = p.body;
        post.appendChild(body);

        var comments_container = document.createElement("section");
        comments_container.classList.add("post-comments");
        createComments(p.id, comments_container);
        post.appendChild(comments_container);

        container.appendChild(post);
    });
}

async function createComments(post_id, container) {
    var section_title = document.createElement("h2");
    section_title.classList.add("comment-section-title");
    section_title.innerText = "Comments";
    container.appendChild(section_title);

    await blog.getComments(post_id)
        .then(comments => comments.forEach((comment) => {
            var comment_element = document.createElement("article");
            comment_element.classList.add("post-comment");

            var user = document.createElement("h2");
            user.classList.add("comment-user");
            user.innerText = comment.name;
            comment_element.appendChild(user);

            var email = document.createElement("h2");
            email.classList.add("comment-email");
            email.innerText = comment.email;
            comment_element.appendChild(email);

            var body = document.createElement("p");
            body.classList.add("comment-body");
            body.innerText = comment.body;
            comment_element.appendChild(body);

            container.appendChild(comment_element);
        }));
}

function getPostInput() {
    var post_title_input = document.getElementById("post-title-input").value;
    var post_body_input = document.getElementById("post-body-input").value;

    return {
        title: post_title_input,
        body: post_body_input
    };
}

function clearPostInput() {
    document.getElementById("post-title-input").value = "";
    document.getElementById("post-body-input").value = "";
}


export {
    addPosts,
    getPostInput,
    clearPostInput
};
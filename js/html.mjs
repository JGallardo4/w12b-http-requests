function addPosts(posts, container) {
    Array.from(posts).forEach((p) => {
        var post = document.createElement("article");
        post.classList.add("post");
        post.id = p.id;

        var delete_button = document.createElement("button");
        delete_button.classList.add("post-action");
        var delete_icon = document.createElement("i");
        delete_icon.classList.add("fa");
        delete_icon.classList.add("fa-window-close");
        delete_icon.ariaHidden = "true";
        delete_button.appendChild(delete_icon);
        post.appendChild(delete_button);

        var edit_button = document.createElement("button");
        edit_button.classList.add("post-action");
        var edit_icon = document.createElement("i");
        edit_icon.classList.add("fa");
        edit_icon.classList.add("fa-edit");
        edit_icon.ariaHidden = "true";
        edit_button.appendChild(edit_icon);
        post.appendChild(edit_button);

        var title = document.createElement("h1");
        title.innerText = p.title;
        post.appendChild(title);

        var body = document.createElement("p");
        body.innerText = p.body;
        post.appendChild(body);

        container.appendChild(post);
    });
}

export {
    addPosts
};
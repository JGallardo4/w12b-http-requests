let post = JSON.parse(Cookies.get("editPost"));

let title = document.getElementById("post-title-input");
title.value = post.title;

let body = document.getElementById("post-body-input");
body.innerText = post.body;

let submit_button = document.getElementById("submit-button");
submit_button.addEventListener("click", () => {

});

let cancel_button = document.getElementById("cancel-button");
cancel_button.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "/index.html";
});
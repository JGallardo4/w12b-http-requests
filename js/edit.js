let post = JSON.parse(Cookies.get("editPost"));

let title = document.getElementById("post-title-input");
title.value = post.title;

let body = document.getElementById("post-body-input");
body.innerText = post.body;

console.log(post);
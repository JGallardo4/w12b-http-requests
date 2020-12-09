class Blog {
    url;
    post_array = null;

    constructor(url) {
        this.url = url;
        this.posts = this.getPosts();
    }

    addPost(new_post) {
        fetch(`${this.url}/posts`, {
                method: 'POST',
                body: JSON.stringify({
                    title: new_post.title,
                    body: new_post.body,
                    userId: this.post_array.length,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch(console.log);
    }

    getPosts() {
        return this.post_array ? this.post_array :
            fetch(`${this.url}/posts`)
            .then(response => {
                return response;
            })
            .then(response => response.json())
            .then(post_objs => {
                this.post_array = Array.from(post_objs);
                return this.post_array;
            })
            .catch(console.log);
    }

    async getPost(post_id) {
        return await fetch(`${this.url}/posts/${post_id}`)
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    console.log("nay");
                }
            });
    }

    editPostGET(post_id) {
        Cookies.set("editPostId", post_id, { sameSite: "strict" });

        window.location.href = "/edit.html";
    }

    editPostSET(post_id, new_post) {

    }

    deletePost(post_id) {

    }
}

export {
    Blog
};
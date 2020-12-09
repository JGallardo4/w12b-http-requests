class Blog {
    url;
    post_array = null;

    constructor(url) {
        this.url = url;
        this.posts = this.getPosts();
    }

    addPost(new_post) {

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
            .catch(error => {

            });
    }

    editPostGET(post_id, new_post) {
        Cookies.set("editPost", JSON.stringify(post), {
            sameSite: "none",
            secure: true
        });
        window.location.href = "/edit.html";
    }

    editPostSET(post_id, new_post) {
        Cookies.set("editPost", JSON.stringify(post), {
            sameSite: "none",
            secure: true
        });
        window.location.href = "/edit.html";
    }

    deletePost(post_id) {

    }
}

export {
    Blog
};
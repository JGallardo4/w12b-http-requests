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
            .then(response => response.json())
            .then(post_objs => {
                this.post_array = Array.from(post_objs);
                return this.post_array;
            });
    }

    editPost(post_id, new_post) {

    }

    deletePost(post_id) {

    }
}

export {
    Blog
};
class Blog {
    url;
    post_array = null;
    notifier;

    constructor(url, notifier) {
        this.url = url;
        this.posts = this.getPosts();
        this.notifier = notifier;
    }

    async addPost(new_post) {
        fetch(this.url, {
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
            fetch(this.url)
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
        return await fetch(this.url + post_id)
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    console.log("nay");
                }
            });
    }

    editPost(post_id, new_post) {
        console.log(new_post);
        fetch(this.url + post_id, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: new_post.title,
                    body: new_post.body
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => window.location.href = "/index.html")
            .catch(console.log);
    }

    deletePost(post_id) {
        return fetch(this.url + post_id, {
            method: 'DELETE',
        });
    }
}

export {
    Blog
};
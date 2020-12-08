class AjaxHandler {
    url;
    notification_element;
    content = "Loading...";

    constructor(url) {
        this.url = url;

    }

    constructor(url, notification_element) {
        this.url = url;
        this.notification_element = notification_element;
    }

    getPosts() {
        let request = new XMLHttpRequest();
        let this_handler = this;

        request.onreadystatechange = function() {
            if (this.readyState >= 1 && this.readyState < 4) {
                this_handler.content = "Loading...";
                this_handler.updateElement();
            } else if (this.readyState == 4 && this.status == 200) {
                this_handler.content = JSON.parse(this.responseText)["quote"];
                this_handler.updateElement();
            } else {
                alert(this.readyState);
            }
        }

        request.open("GET", this.url, true);
        request.send();

        return this.content;
    }

    updateElement(content) {
        this.notification_element.innerText = this.content;
    }
}

export {
    AjaxHandler
};
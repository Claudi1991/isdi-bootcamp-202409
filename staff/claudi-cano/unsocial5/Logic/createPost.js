function createPost(username, image, text) {
    if (username.length < 4 || username.length > 12)
        throw new Error("Invalid username")

    var post = {
        image: image,
        text: text,
        username: username,
        date: new Date
    }

    postMessage.push(post)
}
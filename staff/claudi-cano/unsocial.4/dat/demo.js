import mongoose from 'mongoose'

import models from './models.js'

const { User, Post, Comment } = models

mongoose.connect('mongodb://localhost/unsocial-test')
    .then(() => Promise.all([
        User.deleteMany({}),
        Post.deleteMany({})
    ]))
    .then(() => {
        const user = new User({ name: 'Claudi', email: 'claudi@cano.com', username: 'ClauStark', password: '123123123' })

        return user.save()
    })
    .then(user => {
        console.log(user)

        const post = new Post({ author: user._id, image: 'http://www.image.com/123', text: 'hola mundo', date: new Date })

        const comment = new Comment({ author: user._id, text: 'hola comment', date: new Date })
        postMessage.comments.push(comment)

        return Post.save()
    })
    .then(post => {
        console.log(post)
    })
    .catch(console.error)
    .finally(() => mongoose.disconnect())
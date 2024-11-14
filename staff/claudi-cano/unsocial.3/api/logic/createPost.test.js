import db from 'dat'
import createPost from './createPost.js'

db.connect('mongodb://127.0.0.1:27017/unsocial-test')
    .then(() => {
        try {
            return createPost('67339fbf156dde083adf67dd', 'https://www.litespeedtech.com/support/wiki/lib/exe/fetch.php/litespeed_wiki:config:403.png?w=400&tok=7a06aa', '403') // id, imagen, postcomment
                .then(console.log) // undefined
                .catch(console.error)
        } catch (error) {
            console.error(error)
        }
    })
    .catch(console.error)
    .finally(() => db.disconnect())
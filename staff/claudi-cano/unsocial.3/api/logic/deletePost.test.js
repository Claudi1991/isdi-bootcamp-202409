import db from 'dat'
import deletePost from './deletePost.js'

db.connect('mongodb://localhost/unsocial-test')
    .then(() => {
        try {
            return deletePost('', '') // nuevos id de mongo
                .then(console.log) // undefined
                .catch(console.error)
        } catch (error) {
            console.error(error)
        }
    })
    .catch(console.error)
    .finally(() => db.disconnect())
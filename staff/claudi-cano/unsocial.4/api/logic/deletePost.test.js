import 'dotenv/config'
import db from 'dat'
import deletePost from './deletePost.js'

db.connect(process.env.MONGO_URL_TEST)
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
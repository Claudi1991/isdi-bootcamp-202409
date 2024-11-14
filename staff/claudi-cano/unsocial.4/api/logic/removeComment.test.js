import 'dotenv/config'
import db from 'dat'
import removeComment from './removeComment.js'

db.connect(process.env.MONGO_URL_TEST)
    .then(() => {
        try {
            return removeComment('') // nuevos id del mongo
                .then(console.log) //undefined
                .catch(console.error)
        } catch (error) {
            console.error
        }
    })
    .catch(console.error)
    .finally(() => db.disconnect())
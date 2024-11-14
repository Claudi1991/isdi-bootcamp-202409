import db from 'dat'
import removeComment from './removeComment.js'

db.connect('mongodb://localhost/unsocial-test')
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
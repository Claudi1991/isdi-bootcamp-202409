import db from 'dat'
import getComments from './getComments.js'

db.connect('mongodb://localhost/unsocial-test')
    .then(() => {
        try {
            return getComments('67339fbf156dde083adf67dd', '6733a03b0df6f8c5b80cdd33') // nuevos id de mongo
                .then(console.log) // [{...}, {...}, ...]
                .catch(console.error)
        } catch (error) {
            console.error(error)
        }
    })
    .catch(console.error)
    .finally(() => db.disconnect())
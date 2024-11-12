import db from 'dat'
import authenticateUser from './authenticateUser'

db.connect('mongodb://127.0.0.1:27017/unsocial-test')
    .then(() => {
        try {
            authenticateUser('ClauStark', '123123123')
                .then(console.log)
                .catch(conse.error)
        } catch (error) {
            console.error(error)
        }
    })
    .catch(console.error)
    .finally(() => db.disconnect())
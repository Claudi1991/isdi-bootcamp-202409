import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        console.log('connected')

        const db = connection.db('unsocial')

        const users = db.collection('users')
        const posts = db.collection('posts')

        users.insertOne({ name: 'Larry Katula', email: 'larry@katula.com', username: 'LarryKatula', password: '123123123' })

        users.find({}).toArray().then(users => console.log(users))
        posts.find({}).toArray().then(posts => console.log(JSON.stringify(posts, null, 2)))

    })
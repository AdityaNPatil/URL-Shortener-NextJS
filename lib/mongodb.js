import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
    useNewUrlParser: true,
}

let client
let clientPromise       // to make connection to MongoDB

// if no URI found as env variable
if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local')
}

// if development environment
if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        // CONNECTION POOLING -- for development environment
        // To avoid redundant connections, the code leverages a global variable global._mongoClientPromise to store the connection promise.
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
}
// if production envt
else {
    // NO CONNECTION POOLING --  
    // A new connection is established for each request, ensuring isolation and allowing for more granular control over connection management.
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

export default clientPromise
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = process.env.URL
// Database Name
const dbName = process.env.DB_NAME

// Insert New User
const createNewUser = function(db) {
  const newUser = {
    name: 'john wix',
    age: '30',
    email: 'Jwix@gmail.com'
  }
  db.collection('users').insert(newUser, (err, result) => {
    if (err) {
      console.log({
        message: 'failed'
      })
    } else {
      console.log({
        message: 'Created new user',
        result: result
      })
    }
  })
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)
  createNewUser(db)

  client.close()
})

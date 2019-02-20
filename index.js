require('dotenv').config()

const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const dbName = process.env.DB_NAME

// Database Name
const dbName =
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err)
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    client.close()
  })

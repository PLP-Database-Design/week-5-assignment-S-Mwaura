// importing the neccessary dependencies
const express = require('express')
const mySQL = require('mySQL2')
const dotenv = require('dotenv')


const app = express()
dotenv.config()

// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})

// Create connection

const db = mySQL.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

//testing the connection

db.connect((err) => {
  if(err){
    return console.log("Error connecting to mySQL", err)
  }
  console.log ("MySQL connected successfully")
})

// Retrieve all patients by patient id, first name, last name and dob--get-patients1

app.get('/get-patients1', (req, res) =>{
  const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"

  db.query(getPatients, (err, results) => {
    if (err){
      return res.status(500). send('Failed to retrieve patients data')
    }
    res.status(200).send(results)
  })
})

// Retrieve all providers by first name, last name, provider specialty- get providers1

app.get('/get-providers1', (req, res) =>{
  const getProviders = "SELECT first_name, last_name, provider_specialty FROM providers"

  db.query(getProviders, (err, results) => {
    if (err){
      return res.status(500). send('Failed to retrieve providers data')
    }
    res.status(200).send(results)
  })
})


// Retrieve all patients by their first name -get-patients2

app.get('/get-patients2', (req, res) =>{
  const getPatients = "SELECT first_name FROM patients"

  db.query(getPatients, (err, results) => {
    if (err){
      return res.status(500). send('Failed to retrieve patients data')
    }
    res.status(200).send(results)
  })
})


// Retrieve all providers specialty -get providers2

app.get('/get-providers2', (req, res) =>{
  const getProviders = "SELECT provider_specialty FROM providers"

  db.query(getProviders, (err, results) => {
    if (err){
      return res.status(500). send('Failed to retrieve providers data')
    }
    res.status(200).send(results)
  })
})




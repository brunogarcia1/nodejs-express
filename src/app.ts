import  { Client } from 'pg'

async function main() {

const express = require('express')
const app = express()
const port = 3000

const client = new Client()
await client.connect()

const res = await client.query('SELECT $1::text as message', ['Db Connection is ok!!'])
console.log(res.rows[0].message)
await client.end()

app.get('/',(req,res) =>{
    res.send('Hello Codelab!!')
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})

}
main();
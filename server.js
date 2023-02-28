//dependencies: express, cors, dotenv, pg

import express from "express"
const app = express()
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()


import {client} from "./db/db.js"
const port = process.env.PORT || 80


app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.get('/', async (req, res) =>{
    try{
        const result = await client.query('SELECT * FROM cards')
        const {rows} = result 
        res.status(200).type('application/json').json(rows)    
    }
    catch(error){
        res.status(404).type('text/plain').send(error)
    }
})

app.get("/cards/:id", async (req, res) => {
    const { id } = req.params
    try {
        const result = await client.query('SELECT * FROM cards WHERE id = $1',[id]) 
        res.status(200).type('application/json').json(result.rows)
    } catch(error) {
        res.status(500).type('text/plain').send(error)
    }
})

app.post("/cards",  async (req, res) => {
    let {back_word,color,front_word} = await req.body
    try {
        let body = await req.body
        const result = await client.query('INSERT INTO cards (front_word, back_word, color) VALUES ($1,$2,$3) returning *;',[front_word, back_word, color])
        res.status(200).type('application/json').json(req.body)
    } catch(error) {
        res.status(500).type('text/plain').send(error)
    }  
})

app.patch('/cards/:id', async (req,res) =>{
    try{
        const {id} = req.params 
        const {front_word,back_word,color} = await req.body
        const result = await client.query('UPDATE cards SET front_word = $1, back_word = $2, color = $3 WHERE id =$4 returning *',[front_word,back_word,color,id])
        const {rows} = result 
        if (rows.length === 0){
            res.status(404).type('text/plain').send('not found')
        }else{
            res.status(200).type('application/json').json(rows)    
        }
    }catch(error){
        res.status(404).type('text/plain').send(error)
    }
})

app.delete("/cancel/:id", async (req, res) =>{
    const { id } = req.params
    try {
        const deleted = await client.query('DELETE FROM cards WHERE id = $1 returning *',[id]) 
        let {rows} = deleted
        if (rows.length === 0){
            res.status(404).type('text/plain').send(id)
        }else{
            res.status(200).type('application/json').json(rows)    
        }
    } catch(error) {
        res.status(500).type('text/plain').send(error)
    }
})

// function validate(data) {
//     if (data.length === 0){
//         res.status(404).type('text/plain').send('not found')
//     }else{
//         res.status(200).type('application/json').json(rows)    
//     } 
// }

// Server Listening
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})
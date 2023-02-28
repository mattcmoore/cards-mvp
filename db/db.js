import pkg from "pg"
const {Pool} = pkg
import dotenv from "dotenv"
dotenv.config()

// var client = new Pool({
//     user: "matt",
//     password: "volleyball",    
//     host: "localhost",
//     port: "5432",
//     database: "cardsdb"
// })

const connectionString = process.env.DATABASE_URL;

console.log(connectionString)

const client = new Pool({
    connectionString,
});

export{client}
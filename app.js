const express = require("express") // express require gareko
const bookRoute = require("./routes/bookRoute")
const cors = require("cors")

const app = express() // express lai trigger gareko 
require("./database/connection")
app.use(express.json());
app.use(cors(
    {
        origin : "http://localhost:5173" // React app ko port
    }
));

app.use("/api", bookRoute); // Ensure the prefix is correctly handled

// let app = require("express")()

// localhost:4000/api+ /hello = localhost:4000/api/hello
// localhost:4000/api + /books/:id = localhost:4000/api/books/:id
// localhost:4000/api/haha/ + /books = localhost:4000/api/haha//books
app.use("/api/books",bookRoute)
app.use("/api", bookRoute); // Ensure the prefix is correctly handled



app.listen(5000, function () {
    console.log("project/server/backend has started at port 5000")
})
const express = require('express');

// set up express
const app = express();
// app.use(express.json());

//const addr = process.env.ADDR || ":80"
const addr = "localhost:4000"
const [host, port] = addr.split(":")

app.get("/test/", (req, res) => {
    res.set("Content-Type", "text/html")
    res.send("<html><body>Hello from NodeJS</body></html>");
})

app.listen(port, host, () => {
    console.log("server is listening at http://" + host + ":" + port)
})
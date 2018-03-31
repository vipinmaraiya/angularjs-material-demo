const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../public")));

app.get("/api/isAdmin", (req, res) =>{
    res.send(true)
});

app.use("*",function(req, res) {
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
  });

app.listen(3000, ()=>{
     console.log(`Server is listening on port 3000`);
});
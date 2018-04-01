const express = require("express");
const app = express();
const path = require("path");



app.get("/api/users", (req, res) =>{

    setTimeout(function(){
        res.send([
            {
                name:"AVipin",
                company:"ABC"
            },
            {
                name:"BVipin",
                company:"ABC"
            },
            {
                name:"CVipin",
                company:"ABC"
            },
            {
                name:"DVipin",
                company:"ABC"
            },{
                name:"ZVipin",
                company:"ABC"
            },
            {
                name:"Vipin",
                company:"ABC"
            },
            {
                name:"Vipin",
                company:"ABC"
            }])
    },0)
 
});
app.use(express.static(path.resolve(__dirname, "../public")));

app.use("*",function(req, res) {
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
  });

app.listen(3000, ()=>{
     console.log(`Server is listening on port 3000`);
});
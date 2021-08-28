const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Server Started!!!!!!!</h1>")
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
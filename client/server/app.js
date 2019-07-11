console.log(__dirname+'/../build')

const express = require('express');
const app = express();


app.use(express.static(__dirname+'/../build'));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname+'/../build', "index.html"));
})

app.listen(process.env.PORT, () => console.log('app started'));
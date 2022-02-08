const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8000;

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.get('/', (req, res) => {
  const breweries = [
      {
        name: "NoLabel",
        location: "Katy"
      },
      {
        name: '8th wonder',
        location: "Houston"
      }
    
  ]
  return res.status(200).json(breweries)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

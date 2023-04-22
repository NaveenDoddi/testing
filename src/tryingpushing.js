const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/data plz push', (req, res) => {
  const newData = req.body;
  
  fs.readFile('database.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading data file');
      return;
    }
    
    const existingData = JSON.parse(data);
    existingData.push(newData);
    const updatedData = JSON.stringify(existingData, null, 2);
    
    fs.writeFile('database.json', updatedData, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing data file');
        return;
      }
      
      res.send('Data added successfully');
    });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

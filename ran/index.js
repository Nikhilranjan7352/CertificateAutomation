const express= require('express');
const app =express()

app.listen(9000,()=>{
    console.log('server is running on 3000');
})
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
  app.get('/oop', (req, res) => {
    res.send('Hell');
  });
  
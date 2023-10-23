const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./conn/conn');

app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true,origin:[ 'http://localhost:3000' ] }));

conn();
app.use('/api/v1',require('./routes/todoRoutes'));

app.listen(4000,()=>{
    console.log('Server running!!!');
});
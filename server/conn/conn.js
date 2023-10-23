const mongoose = require('mongoose');

const conn = async()=>{
   const connect = await mongoose.connect('mongodb://localhost:27017/todo');
   if(connect){
       console.log('Database connected!!!');
    }else{
        console.log('Database not connected!!!');
    }
}

module.exports = conn;
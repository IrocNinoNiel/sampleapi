const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 5000;


const key = require('./config/key').MongoURI;
mongoose.connect(key,{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>console.log('Database Connection Established...'))
    .catch(err=>console.log(err));

// Middle ware
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({extended:false}));

app.use('/api',require('./entities/todo/routes/api/todo'));

app.listen(PORT,console.log(`Server at PORT ${PORT}`))
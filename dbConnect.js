const mongoose = require('mongoose');
const uri = "mongodb+srv://rescue:rescue123@cluster0.0xsgsho.mongodb.net/Pearl";

// connect to MongoDB Atlas
mongoose.connect(uri)
.then( () => console.log('Connected to MongoDB!'))
.catch( err => console.log(err))
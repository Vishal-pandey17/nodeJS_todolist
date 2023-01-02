const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');     

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'error connecting DB'));

// db.once('open', function()
// {
//     console.log('Sucessfully connected to Data Base');
// });

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db')
        console.log('connection successfull !!');
}
main().catch((error)=>{console.log("connection not successfull !!");});
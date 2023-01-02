
const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

const db = require('./config/mongoose');
const todolist = require('./models/todolist');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('assest'));


// app.get('/', function(req,res){
    
//      return res.render('home', {
//         title: 'TODO LIST'
//      });
// });

app.get('/', function(req,res)
{
    todolist.find({}, function(err, todolist)
    {
      if(err)
      {
         console.log("error in Fetching todo in DB");
         return ;
      }

      return res.render('home', { 
         title: "TODO LIST",
         minorProject: todolist
   
   });
    });
});

app.post('/create-todolist', function(req,res)     // to create a data
{
      todolist.create({
         description: req.body.Description,
         category: req.body.category,
         duedate: req.body.dueDate
     }, function(err, newtodolist)
     {
        if(err)
        {
          console.log('error in creating a TODOLIST',err);
          return;
        }

        console.log("*********", newtodolist);
        return res.redirect('back');
     }); 
});

app.delete('/deleteTasks', function(req,res)
{
     
     let task = req.body.data;
     if(task){
      for(let i=0;i<task.length;i++)
      {
       todolist.deleteOne({
          _id: task[i]
      }, function(err, deletelist)
      { 
          if(err)
          {
             console.log('Error to delete todolist',err);
             return;
          }
      });        
     }
     return res.status(200).json({
      message: 'success'
  });
     }
     else{
      return res.redirect('back');
     }
});

app.listen(port, function(err)
{
   if(err)
   {
       console.log('Error', err);
   }
   console.log('Yup! My express server is running on port: ', port);
});
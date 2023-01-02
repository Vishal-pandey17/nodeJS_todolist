const task = [];
async function deletetodolist(){
    
    let name = document.getElementsByName('taskid');
   
    for(let i=0;i<name.length;i++)
    {
       if(name[i].checked){
          
          task.push(name[i].value);
         
       }
    }

    for(let i=0;i<task.length;i++)
    {
        console.log(task[i]);
    }
   let result = await fetch('http://localhost:8000/deleteTasks', {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: task
      })
   }); 
   result = await result.json();
  if(result.message=='success'){
    window.location.reload();
    
  }  
}
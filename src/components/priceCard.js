import { useState } from "react";


const Todosearch = () => {

  const [task, setTask] = useState("");
  const [task1, setTask1] = useState("");
  const [tasks, setTasks] = useState([]);
  const[editIndex,setEditIndex]= useState(null);
  const[filter,setFilter]=useState("All")

  const handleAdd = (e) => {
    if (task && task1) {
      const newTasks = {
        title: task,
        description: task1,
        status:"Not Completed"
      }
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = { ...updatedTasks[editIndex], ...newTasks };
        setTasks(updatedTasks);
        setEditIndex(null);
      }
        else{
          setTasks([...tasks, newTasks])

        }
      
      



      setTask("")
      setTask1("")

    }
    else {
      alert("please fill both titles and description")
    }
  }

    const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  
  const handleStatusChange=(index,newStatus)=>{
   const updatedTasks=[...tasks]
   updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  }
   const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });
  return (
    <>
    
    <h1 style={{textAlign:"center", color:"cyan"}}>My Todo</h1>
    <div className="input">

      <input type="text" placeholder="Todo Name" value={task} onChange={(e) => setTask(e.target.value) } ></input>

      <input type="text" placeholder="todo description" value={task1} onChange={(e) => setTask1(e.target.value)}></input>

      

      <button onClick={handleAdd} className="button-add">
        {editIndex!==null? "Update Todo" :"Add Todo"}</button>

      </div>
      <div className="h2">
      <h2>My Todos</h2>
      <h2>Status Filter:
        <select style={{backgroundColor: "deeppink",
    width: "150px", marginLeft:"20px",  
    height: "40px",color:"white"}} onChange={(e)=>setFilter(e.target.value)} value={filter}>
          <option>All</option>
          <option style={{backgroundColor:"green"}}>Completed</option>
          <option>Not Completed</option>
        </select>
      </h2>
      </div>
     <div className="card-container">
        {filteredTasks.map((item,index)=>(
           <div className="styles-card">
          
        <h1>name:{item.title}</h1>
        <p>description :{item.description}</p>
        <label>Status :
          <select style={{backgroundColor: item.status === 'NotCompleted' ? "brown" : "green" ,color:"white" }} onChange={(e)=>handleStatusChange(index,e.target.value)} value={item.status}>
            <option value="Not Completed">NotCompleted</option>
            <option value="Completed">Completed</option>
          </select>

          
        </label>
        
        
        <div className="button" style={{marginTop:"50px"}}>
        <button className="button-edit">Edit</button>
        <button className="button-delete" onClick={()=>handleDelete(index)}>Delete</button>

        </div>
        </div>

        ))}
     </div>
        


      
     
    </>
    
  )
  
}

export default Todosearch;
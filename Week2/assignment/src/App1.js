import './App.css';
import React, { useEffect, useState } from "react";


function App()
{
  function get_data_from_storage()
  {
    const data = localStorage.getItem("notes");
    if (data)
    {
      return JSON.parse(data);
    }
    return [];
  }

  

  const [notes, setNotes] = React.useState(get_data_from_storage());
  const toggleKey = document.getElementById("bootswatchCSS");
  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes));
  },[notes]
  )
  function handleSubmit(e)
  {
    e.preventDefault();
    const task = e.target.task.value;
    if (!task)
    {
      alert("Please enter a task");
      return;
    }
    setNotes([...notes,{Text:task,completed:false}]);
    e.target.task.value = "";
  }

  function delete_note(index)
  {
    let new_notes = [...notes]
    new_notes.splice(index,1);
    setNotes(new_notes);
  }

  
  function  toggleColor(e)
  {
    e.preventDefault();
    e.target.innerHTML = (e.target.innerHTML === "Dark Mode" ? "Light Mode" : "Dark Mode");
    toggleKey.href = (toggleKey.href === "https://bootswatch.com/5/lux/bootstrap.min.css" ? "https://bootswatch.com/5/darkly/bootstrap.min.css" : "https://bootswatch.com/5/lux/bootstrap.min.css");
  }
  return (
    <div className='container my-5'>
      <div className='mx-auto rounded border p-6' style={{maxWidth:"60%"}}>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input className="form-control" placeholder="Add a note....." name = "task" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit"><i className="bi bi-check"></i></button>
        </form>
      </div>
      <div className="d-flex justify-content-end mb-2">
        <button id="themeToggleBtn" className="btn btn-primary mb-3" onClick={toggleColor}>Light Mode</button>
      </div>
      <div class="text-center container">
        {
          
          notes.map((note,index) => {
            return (
              // <div key={index} className='rounded mt-4 p-2 d-flex' style={{backgroundColor:note.completed?"#87FC68":'#fbceb1'}}>
                
                
              <div key={index} className="card mt-4 p-2 d-flex col-md-4 col-xl-3" style={{ width: "18rem", backgroundColor:note.completed?"#87FC68":'#fbceb1'}}>
                <div className="card-body">
                  <h5 className="card-title">{note.Title}</h5>
                 
                  <p className="card-text">
                    {note.Text}
                  </p>
                  <div style={{position:"absolute"}}>
                   <i className={"h5 me-2 " + note.completed ? "bi bi-check-circle" : "bi bi-circle"} style={{cursor:'pointer'}}></i>
                   <i className="bi bi-trash text-danger" style={{cursor:'pointer'}} onClick={()=>{delete_note(index)}}></i>
                   </div>
                </div>
              </div>

            // </div>
            )
          })
          
        }
        
      </div>
        
      
      
    </div>
    
  )
}

// function App() {
//   // className is reserved keyword in JavaScript, so we use className instead
//   const val = 31;
//   const liked = 10;
//   const link ="https://reactjs.org";
//   // any js code can be written before return statement
//   return (
//     <div className="App"> 
//       {/* <header className="App-header"> 
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <div className="content">
//         <h1>Hello World{val}</h1>
//         <p>Liked {liked}</p>
//         <p>{[1,2,3]}</p>
//         <a href={link}> Site</a>
//       </div>
//     </div>
//   );
// }

// {/* <div className='mx-auto rounded border p-6' style={{maxWidth:"60%"}}>
//         <form className="d-flex">
//           <input className="form-control" placeholder="Add a note....." name = "task" aria-label="Search"/>
//           <button className="btn btn-outline-success" type="submit"><i className="bi bi-check"></i></button>
//         </form> */}
//         {/* <div className='me-auto'>
//                   {note.Text}
//                 </div>
//                 <div>
//                   <i className={"h5 me-2 " + note.completed ? "bi bi-check-circle" : "bi bi-circle"}></i>
//                   <i className="bi bi-trash text-danger"></i>
//                 </div>
//               </div> */}
export default App;

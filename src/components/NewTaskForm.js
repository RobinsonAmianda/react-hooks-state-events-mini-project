import React from "react";

function NewTaskForm() {
  const[name,setName]=useState("")
  const[value,setValue]=useState("")
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text"  value="name" onChange={(e)=>setName(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          <option>
            <select>

            </select>
          </option>
        </select>
      </label>
      <input type="submit" value="Add task" onChange={(e)=>setValue(e.target.value)}/>
    </form>
  );
}

export default NewTaskForm;

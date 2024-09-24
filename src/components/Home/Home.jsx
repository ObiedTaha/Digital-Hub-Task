import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";
import { useTasks } from "../../Context/TaskContext";

export default function Home() {
  const { tasks, updateTask, deleteTask } = useTasks();

  const [data, setData] = useState(null);
  const [mode, setMode] = useState("create");

  const handleEdit = (item) => {
    setData(item);
    setMode("edit");
  };

  const handleDelete = (id) => {
    deleteTask(id); // Call deleteTask with unique task ID
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "yellow";
      case "Not Started":
        return "red";
      case "Finished":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <>
      <Dialog data={data} mode={mode} />
      <div className="container">
        <div className="row">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="col-md-4 col-sm-6 col-lg-3 mt-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span className="px-2 h6">{task.taskName}</span>
                      <span className="py-2 h6" style={{
                        display: "inline-block", width: "20px", height: "20px",
                        borderRadius: "50%", backgroundColor: getStatusColor(task.status?.value), marginRight: "10px",
                      }} />
                      {task.status?.value ? (<span className="py-2 h6">({task.status?.value})</span>) :
                        (<span className="py-2 h6">(Select Status)</span>)}
                    </div>
                    <div>
                      <button className="btn p-0 m-1 border-0" onClick={() => handleEdit(task)} >
                        <i className="fa-regular fa-pen-to-square text-warning"></i>
                      </button>
                      {/* Use the task's unique ID for deletion */}
                      <button className="btn p-0 m-1 border-0" onClick={() => handleDelete(task.id)} >
                        <i className="fa-regular fa-trash-can text-danger"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5>{task.taskDescription}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No tasks available.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

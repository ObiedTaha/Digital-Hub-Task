import React, { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import toast from "react-hot-toast";
import { useTasks } from "../../Context/TaskContext";
import { Modal } from "bootstrap"; // Ensure Bootstrap JS is available

// Define custom styles for Select
const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "blue",
    "&:hover": {
      borderColor: "darkblue",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "blue" : state.isFocused ? "lightgray" : "white",
    display: "flex",
    alignItems: "center",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "darkblue",
  }),
};

const statusOptions = [
  { value: "Not Started", label: "Not Started", color: "red" },
  { value: "In Progress", label: "In Progress", color: "yellow" },
  { value: "Finished", label: "Finished", color: "green" },
];

const formatOptionLabel = ({ label, color }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <span
      style={{
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: color,
        marginRight: "8px",
      }}
    />
    {label}
  </div>
);

export default function Dialog({ data, mode }) {
  const { addTask, tasks, updateTask } = useTasks();
  const { register, handleSubmit, control, setValue, reset } = useForm();
  const modalRef = useRef(null); // Use useRef for modal reference

  const openDialog = (data) => {
    setValue("taskName", data.taskName);
    const modalElement = document.getElementById("staticBackdrop");
    modalRef.current = new Modal(modalElement); // Set the modal reference
    modalRef.current.show(); // Show the modal
  };

  const onSubmit = (formValue) => {
    if (mode === "edit") {
      console.log(data.id, formValue);
      updateTask(data.id, formValue);
      modalRef.current.hide(); // Use the modal reference to hide
      toast.success("Task Edit Successfully");
    } else {
      addTask({ ...formValue });
      toast.success("Task Added Successfully");
    }
  };

  useEffect(() => {
    if (mode === "edit" && data) {
      openDialog(data);
    } else {
      reset();
    }
  }, [data, mode]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2>
          Total Tasks: <span>{tasks.length}</span>
        </h2>
        <button
          type="button"
          className="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add Task
        </button>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="mb-2">Task Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("taskName", { required: true })}
                  />
                </div>
                <div>
                  <label className="mb-2">Task Description</label>
                  <textarea
                    className="form-control"
                    {...register("taskDescription", { required: true })}
                  ></textarea>
                </div>
                <div className="mt-3">
                  <Controller name="status" control={control} render={({ field }) => (
                    <Select {...field} options={statusOptions} formatOptionLabel={formatOptionLabel} placeholder="Status..." styles={customStyles} />)} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

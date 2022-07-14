import React, { useState } from "react";
import { connect } from "react-redux";

const style = {
  border: "solid 2px",
  padding:"15px",
  width:"160px",

};

function Create(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id,setId]= useState(1);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      window.alert("Please enter title and desc");
    } else {
      props.submit(title, desc,id);
      setId(id+1);
      setTitle("");
      setDesc("");
      console.log("reached");


    }
  };

  const handleDelete = (deleteId) => {
    // e.preventDefault();
    props.delete(deleteId);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    props.update(title, desc);
  };

// 
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          // fontWeight: "bolder",
        }}
      >
        <div>
          <div className="top">
            <h1>
              <strong>Tittle</strong>
            </h1>
            <input
              type="Text"
              className="form-control"
              onChange={handleTitle}
              value={title}
              id="title"
              placeholder="text"
            />
          </div>

          <div className="bottom">
            <h1>
              <strong>Description</strong>
            </h1>
            <textarea
              className="form-control"
              onChange={handleDesc}
              value={desc}
              id="desc"
              rows="8"
            ></textarea>
          </div>

          <button
            type="submit"
            className="button-style"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>

          
        </div>
        <div className="table">
          <table>
            <thead>
              <tr className="org">
                <td style={style}>
                  <strong>Title</strong>
                </td>
                <td style={style}>
                  <strong>Desc</strong>
                </td>
                <td style={style}>
                  <strong>Action</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {props.tasks?.map((item,index) => (
                <tr key = {item.id}>
                  <td style={style}>{item.title}</td>
                  <td style={style}>{item.desc}</td>

                  <td style={style}>
                    <div className="action-style">
                     
                      <button
                        type="update"
                        className="button-style11"
                        onClick={(e) => handleUpdate(e)}
                      >
                        Update
                      </button>

                      <button
                        type="delete"
                        className=" button-style11"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                  <td style={style}>{index}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (title, desc,id) =>
      dispatch({ type: "submit_task", payload: { title, desc ,id} }),

    delete: (id) =>
      dispatch({ type: "delete_task", payload: {id} }),

    update: (id) =>
      dispatch({ type: "update_task", id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);

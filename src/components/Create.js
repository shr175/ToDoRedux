// import React, {useState} from 'react'
import React, { useState} from "react";
// import { useDispatch } from "react-redux";
// import {actions} from './store';
import { connect } from "react-redux";

function Create(props){
  const[title , setTitle] = useState("");
  const[desc , setDesc] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    // const title = document.getElementById('title').value;
    // const desc = document.getElementById('desc').value;
    // const obj = {title, desc};
    // console.log(title, obj)


    if(!title || !desc) {
      window.alert('Please enter title and desc')
    } else {
      // props.submit(obj);
      // document.getElementById('title').value = '';
      // document.getElementById('desc').value = '';

      props.submit(title,desc);
      setTitle('');
      setDesc('');
      console.log('reached');

      
    }
  }

  return (

    <div>

       <div className="mb-3">
           <h3>Tittle</h3>
           <input type="Text" className="form-control" onChange={handleTitle} value={title} id="title" placeholder="text"/>
        </div>

         <div className="mb-3">
            <h3>Description</h3>
            <textarea className="form-control" onChange={handleDesc} value= {desc} id="desc" rows="8"></textarea>
            </div>

          <button type="submit" className='btn btn-primary' onClick={(e) => handleSubmit(e)}>Submit</button>

     </div>

  )  
}



const mapStateToProps = (state) => {
  return {

 

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    // submit: (obj) => dispatch({ type: 'submit_task', payload: obj }),
    submit: (title,desc) => dispatch({ type: 'submit_task', payload: {title,desc} }),

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Create);


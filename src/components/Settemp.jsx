import React, { useRef } from 'react'
import axios from 'axios';
import "../CSS/settemp.css";
import { useNavigate } from 'react-router-dom';
function Settemp() {
  const min = useRef();
  const max = useRef();

   const navigator = useNavigate();
  const setTemp = async () => {
    let minlim = min.current.value;
    let maxlim = max.current.value;

    let data = {
      minimumTemp: minlim,
      maximumTemp: maxlim
    }

    try {
      let res = axios.post("https://tsbackend-2bxj.onrender.com/setTemp", data);
      console.log(res);
      alert("Temperature Limit Updated");
      navigator("/dashboard/")
    } catch (error) {
      console.error(error);
    }

    navigator("/dashboard/");
    


  }
  return (
    <div>
      <form className="settempform"> 
        <div className="group">
          <label htmlFor="lower">
            Minimum Temperature (<sup>o</sup>C) : 
          </label> <br />
          <input type="text" className = 'form-control' ref={min} />
        </div>
        <div className="group">
          <label htmlFor="lower">
            Maximum Temperature (<sup>o</sup>C) : 
          </label> <br />
          <input type="text" className = 'form-control ' ref={max} />
        </div>

        <div className="form-button">
          <button className='btn card-btn' onClick={() => { setTemp() }}>
            Set Tempurature
          </button>
        </div>
      </form>
    </div>
  )
}

export default Settemp
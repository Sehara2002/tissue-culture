import React, { useRef } from 'react'
import axios from 'axios';

function Sethumd() {
    const max = useRef();
    const min = useRef();



    const setHumd = () => {
        let minlim = min.current.value;
        let maxlim = max.current.value;

        let data = {
            minhumd : minlim,
            maxhumd : maxlim
        }

        try{
            let result = axios.post("http://localhost:5000/setHumd",data);
            console.log(result);
        }catch(err){
            console.error(err);
        }
        

    }
    return (
        <div>
            <form className="settempform">
                <div className="group">
                    <label htmlFor="lower">
                        Minimum Humidity (%) :
                    </label> <br />
                    <input type="text" className='form-control' ref={min} />
                </div>
                <div className="group">
                    <label htmlFor="lower">
                        Maximum Humidity (%) :
                    </label> <br />
                    <input type="text" className='form-control ' ref={max} />
                </div>

                <div className="form-button">
                    <button className='btn card-btn' onClick={() => { setHumd() }}>
                        Set Humidtiy
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Sethumd
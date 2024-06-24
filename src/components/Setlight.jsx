import axios from 'axios';
import React, { useRef } from 'react'

function Setlight() {

    const ontimehour = useRef();
    const ontimemin = useRef();
    const ontimesec = useRef();
    const durationhour = useRef();
    const durationmin = useRef();
    const durationsec = useRef();
    const setTime = () => {
        let onhour = ontimehour.current.value;
        let onmin = ontimemin.current.value;
        let onsec = ontimesec.current.value;

        let dhour = durationhour.current.value;
        let dmin = durationmin.current.value;
        let dsec = durationsec.current.value;


        let data = {
            onTime:{
                hour:onhour,
                min:onmin,
                sec:onsec
            },
            onDuration:{
                hour:dhour,
                min:dmin,
                sec:dsec
            }
        }

        try{
            let response = axios.post("http://localhost:5000/setLight",data);
            console.log(response);
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div>
            <form className="settempform">
                <div className="group">
                    <label htmlFor="lower">
                        On Time (24H) :
                    </label> <br />
                    <div className="row">
                        <input type="text" className='form-control' ref={ontimehour} placeholder='Hours' />
                        <input type="text" className='form-control' ref={ontimemin} placeholder='Minutes' />
                        <input type="text" className='form-control' ref={ontimesec} placeholder='Seconds' />
                    </div>
                </div>
                <div className="group">
                    <label htmlFor="lower">
                        On Duration :
                    </label> <br />
                    <div className="row">
                        <input type="text" className='form-control' ref={durationhour} placeholder='Hours' />
                        <input type="text" className='form-control' ref={durationmin} placeholder='Minutes' />
                        <input type="text" className='form-control' ref={durationsec} placeholder='Seconds' />
                    </div>

                </div>
                

                <div className="form-button">
                    <button className='btn card-btn' onClick={() => { setTime() }}>
                        Apply Settings
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Setlight
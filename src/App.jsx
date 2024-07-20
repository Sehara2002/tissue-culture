import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';


import "./CSS/style.css";

import Settemp from './components/Settemp';
import Sethumd from './components/Sethumd';
import Setlight from './components/Setlight';
import Tempchart from './components/Tempchart';
function App() {
  const [state, setState] = useState(false);
  const [tmpBtnTxt, setTmpBtnText] = useState('Manage');
  const [hmdBtnTxt, setHmdBtnText] = useState('Manage');
  const [lightBtnTxt, setLightBtnText] = useState('Manage');

  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentHumd, setCurrentHumd] = useState(0);
  const [currentLight, setCurrentLight] = useState(0);
  const [onhour, setOnHour] = useState(0);
  const [onmin, setOnMin] = useState(0);
  const [onsec, setOnSec] = useState(0);
  const [tempManage, setTempManage] = useState(false);
  const [humdManage, setHumdManage] = useState(false);
  const [lightManage, setLightManage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let tempData = await axios.post("https://tsbackend-2bxj.onrender.com/getFrontTemp");
        console.log(tempData.data);
        setCurrentTemp(tempData.data.temp);

        let humdData = await axios.post("https://tsbackend-2bxj.onrender.com/getFrontHumd");
        console.log(humdData.data);
        setCurrentHumd(humdData.data.humd);

        let lightData = await axios.post("https://tsbackend-2bxj.onrender.com/getFrontLight");
        console.log(lightData.data);
        setCurrentLight(lightData.data.status);
        setOnHour(lightData.data.onTime.hour);
        setOnMin(lightData.data.onTime.min);
        setOnSec(lightData.data.onTime.sec);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
    let intervalid = setInterval(fetchData,1000);
    return()=>clearInterval(intervalid);

  },[]);
  

  const manageLight = () => {
    if (lightManage) {
      setLightManage(false);
      setLightBtnText('Manage');
    } else {
      setLightManage(true);
      setLightBtnText('Close');
    }
  }
  const manageTemp = () => {
    if (tempManage) {
      setTempManage(false);
      setTmpBtnText('Manage');
    } else {
      setTempManage(true);
      setTmpBtnText('Close');
    }
  }

  const manageHumd = () => {
    if (humdManage) {
      setHumdManage(false);
      setHmdBtnText('Manage');
    } else {
      setHumdManage(true);
      setHmdBtnText('Close');
    }
  }

  return (
    <div className="App">
      <div className="container-fluid nav-bar-cont">
        <div className="row">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h4 className="card-title">Light Status</h4>
              <p className="onstatus">
                Lights <p className="light-state-info">{currentLight}</p>
              </p>
              <p className="onDuration">
                For {onhour}:{onmin}:{onsec} Time
              </p>
              <button className="card-btn btn" onClick={() => manageLight()}>
                {lightBtnTxt}
              </button>

              {
                (lightManage) ? <Setlight /> : ''
              }
            </div>
          </div>




        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h4 className="card-title">Tempurature Status</h4>
              <p className="card-text">
                {currentTemp} <sup>o</sup>C<br />
              </p>
              <button className="card-btn btn" onClick={() => manageTemp()}>
                {tmpBtnTxt}
              </button>

              {
                (tempManage === true) ? <Settemp /> : ''
              }
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h4 className="card-title">Humidity Status</h4>
              <p className="card-text">
                {currentHumd} %<br />
              </p>
              <button className="card-btn btn" onClick={() => manageHumd()}>
                {hmdBtnTxt}
              </button>
              {
                (humdManage === true) ? <Sethumd /> : ''
              }
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
{/*           
            <div class="card ">
              <Tempchart/>
            </div>
            <div class="card">
              <Tempchart/>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;

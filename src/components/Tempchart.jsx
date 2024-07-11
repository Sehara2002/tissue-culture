import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import axios from 'axios';
    
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function Tempchart() {

    useEffect(()=>{
        axios.get("https://tsbackend-2bxj.onrender.com/getDbTemps")
    },[]);

    const data = [
        { timeStamp: '08:00:00', temp: 22 },
        { timeStamp: '08:05:00', temp: 23 },
        { timeStamp: '08:10:00', temp: 24 },
        { timeStamp: '08:15:00', temp: 21 },
        { timeStamp: '08:20:00', temp: 20 },
        { timeStamp: '08:25:00', temp: 25 },
        { timeStamp: '08:30:00', temp: 25 },
        { timeStamp: '08:35:00', temp: 26 },
        { timeStamp: '08:40:00', temp: 27 },
        { timeStamp: '08:45:00', temp: 21 },
        { timeStamp: '08:50:00', temp: 22 },
        { timeStamp: '08:55:00', temp: 20 },
        { timeStamp: '09:00:00', temp: 24 }
    ];

    const chartData = {
        labels: data.map(d => d.timeStamp),
        datasets: [
            {
                label: "Tempurature",
                data: data.map(d => d.temp),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };
    return (
        <div>
            <h2>Temp Chart</h2>
            <Line data={chartData} />
        </div>
    )
}

export default Tempchart
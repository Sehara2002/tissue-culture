import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/navbar.css';
function Navbar() {

    const [date, setDate] = useState();

    useEffect(() => {
        let date = new Date();
        let today = date.toLocaleDateString();
        setDate(today);
    },[]);
    return (
        <div className="container-fluide navbar-container">
            <div className="row">
                <div className="col-sm-6">
                    <p className='Logo'>TMS | Admin Dashboard</p>
                </div>
                <div className="col-sm-6">
                    <p className="date">{date}</p>
                </div>

            </div>

        </div>
    )
}

export default Navbar
import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./toalAmount.scss"


const TotalAmount = () => {
    const [data, setData] = useState({})
    const find = async () => {
        const res = await axios.get("http://localhost:8080/ssf/findTotalsavingAmount")
        setData(res.data)
    }
    useEffect(() => {
        find()
    }, [])
    return (
        <div className='Container'>          
            {Object.keys(data).length && 
            (<div >
            <h2><span className='LC'>Special User</span>: <span className='RC'>{ new Intl.NumberFormat('en-IN').format( data.SU)}</span></h2>
            <h2><span className='LC'>General User</span>: <span className='RC'>{new Intl.NumberFormat('en-IN').format(data.GU)}</span></h2>
            <h2><span className='LC'>Premium User</span>: <span className='RC'>{ new Intl.NumberFormat('en-IN').format(data.PU)}</span></h2>
            <h2><span className='LC'>Special Premium User</span>: <span className='RC'>{new Intl.NumberFormat('en-IN').format(data.SPU)}</span></h2>
            <h2><span className='LC'>Total Amount</span>: <span className='RC'>{new Intl.NumberFormat('en-IN').format(data.Total)}</span></h2>
            </div>
            )}
        </div>

    )
}

export default TotalAmount

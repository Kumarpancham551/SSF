import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./loan.scss"

const LoanTaken = () => {
    const [data, setData] = useState(0)
    const find = async () => {
        const res = await axios.post("http://localhost:8080/ssf/loanTakenUserDetals")
        setData(res.data)
    }
    useEffect(() => {
        find()
    }, [])

    return (
        <div>
            
                <h1 className='center'>Total Loan Taken User: {data.length}</h1>
          
            {data && data.map((value, index) => (
                <div className='serachContainer'>
                    <h2 className='htwo'>SerialNo : {value.SerialNo}</h2>
                    <h4>Name : {value.Name}</h4>
                    <h4>MobileNumber : {value.MobileNumber}</h4>
                    <h4>MemberType : {value.MemberType}</h4>
                    <h3 className='hthree'>LoanStatus : {value.LoanStatus}</h3>
                    <h4>Comment : {value.Comment}</h4>
                    <h5 className='hfive'>User:{index+1}</h5>
                </div>
            ))}
        </div>

    )
}

export default LoanTaken
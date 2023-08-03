import React, { useState } from 'react';
import "./serach.scss"
import axios from "axios";
const Search = () => {
    const [data,setData]=useState(0)
    const find = async()=>{
        let input = 
            {
                SerialNo : 2,
                MemberType : "S"
             }
             const res =  await axios.post("http://localhost:8080/ssf/showUserDetails",input)
            setData(res.data)

      

    }
  return (
    <div className='serachContainer'>   
    <input type="text" placeholder="Search..." class="search-input" />
      <button type="submit" class="search-button" onClick={find}>Search</button>
      <div className='lineBreak'>
      </div>
      
                {data!=0?(<div className="Detail">
                <h3>SerialNo : {data.SerialNo}</h3>
                <h3>Member Number : {data.MemberNumber}</h3>
                  <h4>Name : {data.Name}</h4>
                  <h5>Member Type : {data.MemberType}</h5>
                  <h5>UIDNumber : {data.UIDNumber}</h5>
                  <h5>Mobile Number : {data.MobileNumber}</h5>
                  <h5>Performance : {data.PerformanceNumber}</h5>
                  <h5>Address : {data.Address}</h5>
                  </div>):<div></div>}
    </div>
  )
}

export default Search
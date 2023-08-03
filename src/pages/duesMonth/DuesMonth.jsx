import React, { useEffect, useState } from 'react';
import axios from "axios";

const DuesMonth = () => {
    const [data, setData] = useState(0)
    const find = async () => {
        const res = await axios.get("http://localhost:8080/ssf/findUserWhosemontlyAmountIsPending")
        setData(res.data.details)
    }
    useEffect(() => {
        find()
    }, [])
    console.log(data)
    return (
        <div>

                <h1 className='center'>Uers Whose Monthly Payment is Dues: {data.length}</h1>

            {data && data.map((value, index) => (
                <div className='serachContainer'>
                    <h2>SerialNo : {value.SerialNo}</h2>
                    <h4>Name : {value.Name}</h4>
                    <h4>MobileNumber : {value.MobileNumber}</h4>
                    <h4>Dues Month : {value.DuesMonth}</h4>
                </div>
            ))}
        </div>
        // <>
        //     <div className={`shadow-xs card card-custom card-stretch gutter-b`}>

        //         <div className="card-header">
        //             <div className="card-title align-items-center">
        //                 <h3 className="ml-3 mb-0" >Uers Whose Monthly Payment is Dues: {data.length}</h3>
        //             </div>
        //         </div>
        //         <div className="card-body pt-0 pb-3">
        //             <div className="tab-content">
        //                 <div className="table-responsive">
        //                     <table className="table table-hover">
        //                         <thead>
        //                             <tr>
        //                                 <th className="text-center">SerialNo</th>
        //                                 <th className="text-center">Name</th>
        //                                 <th className="text-center">Mobile Number</th>
        //                                 <th className="text-center">Dues Month</th>
        //                             </tr>
        //                         </thead>
        //                         {data && data.map((value, index) => (
                                   
        //                              <tbody>
        //                              <tr>
                                            
        //                                      <td className="text-center">{value.SerialNo}</td>
        //                                      <td className="text-center">{value.Name}</td>
        //                                      <td className="text-center">{value.MobileNumber}</td>
        //                                      <td className="text-center">{value.DuesMonth}</td>
                
        //                              </tr>
        //                              </tbody> 
        //           ))}
        //                     </table>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>

    )
}

export default DuesMonth
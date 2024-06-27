import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Account = () => {
    let data = useSelector(
        (state)=>{
            return state;
        }
    );

  return (
    <>
        <div className='container'>
            <h1>AccountDetailes</h1>
            <table className='table table-bordered w-50'>
                <thead>
                    <tr>
                        <th>amount</th>
                        <th>name</th>
                        <th>mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.balance}</td>
                        <td>{data.name}</td>
                        <td>{data.mobile}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Account
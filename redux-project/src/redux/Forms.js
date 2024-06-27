import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const Form = () => {
    const dispatch = useDispatch();
    const [amount,setAmount] = useState("");
    const [mobile,setMobile] = useState("");
    const [name,setName] = useState("");
  return (
    <>
        <div className='container'>
            <h1>Form</h1>
            <div className='row'>
                <div className='col-4'>
                    <input 
                        type='number' 
                        className='form-control'
                        placeholder='Enter Amount'
                        value={amount}
                        onChange={(e)=>{
                            let data = e.target.value;
                            setAmount(data)
                        }}
                    />
                </div>
                <button className='btn btn-primary col-1'
                    onClick={()=>{
                        dispatch({'type':"deposit",payload:amount});
                        setAmount("");
                    }}
                >Deposit</button>
                <button className='btn btn-danger mx-2 col-1'
                    onClick={()=>{
                        dispatch({'type':"withdraw",payload:amount});
                        setAmount("");
                    }}
                >Withdraw</button>
            </div>
            <div className='row mt-2'>
                <div className='col-4'>
                    <input 
                        type='text' 
                        className='form-control'
                        placeholder='Enter Name ...'
                        value={name}
                        onChange={(e)=>{
                            let data = e.target.value;
                            setName(data)
                        }}
                    />
                </div>
                <button className='btn btn-primary col-1'
                    onClick={()=>{
                        dispatch({'type':"updateName",payload:name});
                        setName("");
                    }}
                >Update</button>
            </div>
            <mobilediv className='row mt-2'>
                <div className='col-4'>
                    <input 
                        type='number' 
                        className='form-control'
                        placeholder='Enter Number ...'
                        value={mobile}
                        onChange={(e)=>{
                            let data = e.target.value;
                            setMobile(data)
                        }}
                    />
                </div>
                <button className='btn btn-primary col-1'
                    onClick={()=>{
                        dispatch({'type':"updateMobile",payload:mobile});
                        setMobile("");
                    }}
                >Update</button>
            </mobilediv>
        </div>
        
    </>
  )
}

export default Form
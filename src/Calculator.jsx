import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { reset,calculation } from './redux/calcuSlice';



function Calculator() {
    const calc=useSelector((state)=>state.calcReducer.calculator)
    console.log(calc);
    const dispatch=useDispatch()
    const [inputValue,setInputValue]=useState('')

    const resetInp=()=>{
        const inputElement=document.getElementById("calc")
        if(inputElement){
            inputElement.value=""
        }
    }

    


    return (
        <>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '80vh' }}>
                <div className='w-75 border border-2 border-light p-3'>
                    <h1 className='text-center text-bolder text-danger m-5'>Calculator</h1>
                    <input type="text" id="calc" onChange={(e)=>{setInputValue(e.target.value)}} className='form-control m-2'  placeholder='enter your expression'/>
                    <h1 className='text-center'>Result:{calc}</h1>
                    <button className='btn btn-success' onClick={()=>{dispatch(calculation(inputValue))}}>Calculate</button>
                    <button onClick={()=>{dispatch(reset());resetInp()}} className='btn btn-danger m-3' >Clear</button>
                </div>
            </div>
        </>
    )
}

export default Calculator

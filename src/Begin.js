import { useState } from 'react';
import Calculator from './Calculator';
import './Begin.css';


function Begin(){
    const [duLieu,setDuLieu]=useState({time:0,
                                        number:0,
                                        dau:'',
                                        show:true
                                        })
    const [time,setTime]=useState('')
    const [number,setNumber]=useState('')
    const [dau,setDau]=useState('')
    const handleClick=()=>{
        setDuLieu({time:time,
                    number:number,
                    dau:dau,
                    show:false})
    }
    console.log(duLieu)
    return(
        <>
        <div className='Begin' style={{display:duLieu.show===true?"flex":'none'}}>
            <div className='input'>
            <label>time</label>
            <input value={time} onChange={(e)=>setTime(e.target.value)} /><br />
            </div>
            <div className='input'>
            <label>number</label>
            <input value={number} onChange={(e)=>setNumber(e.target.value)} /><br/>
            </div>
            <div className='input'>
            <label>dau</label>
            <input value={dau} onChange={(e)=>setDau(e.target.value)} /><br/>
            </div>
            <button onClick={handleClick}>Begin</button>
        </div>
            <Calculator duLieu={duLieu} />
        </>
    )
}
export default Begin;
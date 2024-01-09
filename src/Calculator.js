import { useEffect,useState } from 'react';
import './Calculator.css'
// import Begin from './Begin';
import './Begin.css';


function Calculator(){
    
    const [duLieu,setDuLieu]=useState(
        {time:0,
        number:0,
        dau:'',
        show:true,
        })
    const [timeInput,setTimeInput]=useState('')
    const [number,setNumber]=useState('')
    const [dau,setDau]=useState('')
    const [time,setTime]=useState(timeInput)
    
    const handleBegin=()=>{
        setDuLieu({time:timeInput,
                    number:number,
                    dau:dau,
                    show:false})
        setTime(timeInput)
        setDem(dem+1)
        }

    const [diem,setDiem]=useState(0)
    const [dem,setDem] =useState(0)
    // const [ketqua,setKetqua]=useState(false)
    // 
    // const time=setInterval(()=>{
    //     setTime(time=>time-1)
    // },1000)
    // return ()=>{
    //     clearInterval(time)}
    //     }
    useEffect(()=>{
        const times = setInterval(()=>{
                setTime(time=>time-1)
        },1000)
        return ()=>{
            clearInterval(times)
        }},
        [dem]
    )    
    const [question,setQuestion]=useState('')
    useEffect(()=>{
        const str=duLieu.dau
        const dau= str.split(',')
        let so1=Math.floor(Math.random()*duLieu.number)
        let so2=Math.floor(Math.random()*duLieu.number)
        let random= dau[Math.floor(Math.random()*dau.length)]
        const so=[so1,so2]
        so.sort((a,b) => b-a)
        const pheptoan =`${so[0]} ${random} ${so[1]}`
        setQuestion(pheptoan)
        
    },[dem])

    const [answer,setAnswer]=useState('')

    const handleEnter=()=>{
            if(time <=0){
                setKetthuc(true)
            }
            if(eval(question)===Number(answer)){
                setDiem(diem+1)
                setDem(dem+1)
                setAnswer('')
                setTime(timeInput)

            }  else {
            setKetthuc(true)
            setTime(0)
            }
        
    }
    // useEffect(
    //     ()=>{
    //         const time=setInterval(()=>{
    //             setTime(time=>time-1)
    //         },1000)
    //         return ()=>{
    //             clearInterval(time)}
    //     },[]
    // )
    //    console.log(duLieu.show)
    
    const [ketthuc,setKetthuc]=useState(false)
    // useEffect(()=>{
    //     if(time==0){
    //     setKetthuc(true)
    //     } 
    // },[time])
    // console.log(ketthuc,time)
    // console.log(ketthuc)

    return(
        <>
        <div className='Begin' style={{display:duLieu.show===true?"flex":'none'}}>
            <div className='input'>
            <label>time</label>
            <input value={timeInput} onChange={(e)=>setTimeInput(e.target.value)} /><br />
            </div>
            <div className='input'>
            <label>number</label>
            <input value={number} onChange={(e)=>setNumber(e.target.value)} /><br/>
            </div>
            <div className='input'>
            <label>dau</label>
            <input value={dau} onChange={(e)=>setDau(e.target.value)} /><br/>
            </div>
            <button onClick={handleBegin}>Begin</button>
        </div>
        
        <div className='Calculator' style={{display:duLieu.show===false?"block":'none'}}>
        <div style={{display: ketthuc === true ? "none":"block"}}>
            <div className='Back'>
            {/* <i className="fa-solid fa-arrow-left"></i> */}
            <p>Score : {diem}</p>
            </div>
            <div className='Time'>
                {time}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                </svg>
            </div>
            <h2>Calculator</h2>
            <div className='Input'>
                <input className='question' value={question} readOnly/>
                <input className='answer' value={answer} 
                        onChange={(e)=>e.target.value} />
            </div>
            <div className='Buttons'>
                <button value='1' onClick={(e)=>setAnswer(answer+e.target.value)}>1</button>
                <button value='2' onClick={(e)=>setAnswer(answer+e.target.value)}>2</button>
                <button value='3' onClick={(e)=>setAnswer(answer+e.target.value)}>3</button>
                <button value='4' onClick={(e)=>setAnswer(answer+e.target.value)}>4</button>
                <button value='5' onClick={(e)=>setAnswer(answer+e.target.value)}>5</button>
                <button value='6' onClick={(e)=>setAnswer(answer+e.target.value)}>6</button>
                <button value='7' onClick={(e)=>setAnswer(answer+e.target.value)}>7</button>
                <button value='8' onClick={(e)=>setAnswer(answer+e.target.value)}>8</button>
                <button value='9' onClick={(e)=>setAnswer(answer+e.target.value)}>9</button>
                <button value='0' onClick={(e)=>setAnswer(answer+e.target.value)}>0</button>
                <button value='x' onClick={(e)=>setAnswer('')}>Delete</button>
                <button value='enter' onClick={handleEnter}>Enter</button>
                </div>
            </div>
            <div style={{display: ketthuc === true ? 'block' : 'none' }} className='ketthuc'>
                    <p>Tổng {diem} câu đúng</p>
        </div>
        </div>
        
        </>
    )
}
    
export default Calculator;
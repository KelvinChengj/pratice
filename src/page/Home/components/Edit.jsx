import { useState } from 'react'

const Edit = ({add}) => {

    const [note,setNote]= useState('')

    function onChangeNote(e) {
        setNote(e.target.value)
    }

    const [date,setDate]= useState('')
    function onChangeDate(e) {
        setDate(e.target.value)
    }

    const [time,setTime]= useState('')
    function onChangeTime(e) {
        setTime(e.target.value)
    }

    function addItem(){
        add(function(prevData){
            return [...prevData,{
                note,date,time
        }]})
    }
 
    console.log(note,date,time)

    return <div>        
        <h1>Topic</h1>
        <p>note:</p>
        <input type='text' value={note} onChange={onChangeNote} />
        <p>date:</p>
        <input type='date' value={date} onChange={onChangeDate}/>
        <p>time:</p>
        <input type='time' value={time} onChange={onChangeTime}/>
        <button className='add' onClick={addItem}>input</button>         
        </div>
}

export default Edit
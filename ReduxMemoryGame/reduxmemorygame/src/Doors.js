import React, { useState } from 'react';
import { setSeq,nextPos,resetPos } from './slice/memorySlice';
import { useSelector, useDispatch } from 'react-redux';

const Doors = () => {

    let seq = useSelector((state)=>state.memory.seq);
    let pos = useSelector((state)=>state.memory.pos);
    const dispatch = useDispatch();
    let [i,setI] = useState(0);

    const pathway = (val) => {
        if(seq[pos]!=val){
            //window.alert("You are lost, Try Again!");
            dispatch(resetPos());
        }else{
        dispatch(nextPos());}
    }

  return (
    <>   
        <div>
            <h3>Door Step {pos+1}</h3>
        </div>
        {(pos<6)?( 
        <div className='doors'>
            <div className='door' data-testid="leftDoor" onClick={()=>{pathway('L')}}>|</div>
            <div style={{visibility:"hidden"}}>gapbetweenthedoors</div>
            <div className='door' data-testid="rightDoor" onClick={()=>{pathway('R')}}>|</div>
        </div>):<h3>Congrats! You Escaped</h3>
        }
    </>
  )
}

export default Doors
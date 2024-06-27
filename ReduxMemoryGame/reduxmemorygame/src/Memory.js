import React, { useRef, useState } from 'react';
import Doors from './Doors';
import { useDispatch } from 'react-redux';
import { setSeq,nextPos } from './slice/memorySlice';

const Memory = () => {

    const dispatch = useDispatch();

    const dirArr = ['L','R'];
    let [qnSeq, setQnSeq] = useState("");

    const questionSentence = useRef();
    const instructionReference = useRef();
    const goReference = useRef();
    const questionDivision = useRef();
    const doorDivision = useRef();

    const genSeq = () => {
        questionSentence.current.style.visibility = "hidden";
        instructionReference.current.style.visibility = "hidden";
        goReference.current.style.visibility = "hidden";
        let joker = "";
        for(let i=0; i<6;i++){
            joker+=dirArr[Math.floor(Math.random()*dirArr.length)];
        }
        setQnSeq((qnSeq)=>joker);
        dispatch(setSeq(joker));
        questionSentence.current.style.visibility = "visible";
        const instructionTimer = setTimeout(()=>{
            instructionReference.current.style.visibility = "visible";
        },1000);
        const goTimer = setTimeout(()=>{
            goReference.current.style.visibility = "visible";
        },5000);
    }

    const afterGoBtn = () => {
        questionSentence.current.style.visibility = "hidden";
        instructionReference.current.style.visibility = "hidden";
        goReference.current.style.visibility = "hidden";
        questionDivision.current.style.visibility = "hidden";
        doorDivision.current.style.visibility = "visible";
    }

  return (
    <>
    <div style={{visibility:"hidden"}} data-testid="doorDivision" ref={doorDivision}>
        <Doors/>
    </div>
    <div ref={questionDivision}>
        <button onClick={genSeq} data-testid="generateQuestionBtn">Generate Question</button>
        <h3 style={{visibility:"hidden"}} ref={questionSentence} data-testid="questionSentence">Your sequence is: {qnSeq}</h3>
        <h3 style={{visibility:"hidden"}} ref={instructionReference} data-testid="memorizeInstruction">Memorize the Sequence</h3>
        <button style={{visibility:"hidden"}} ref={goReference} onClick={afterGoBtn} data-testid="goBtn">GO</button>
    </div>
    </>
  )
}

export default Memory
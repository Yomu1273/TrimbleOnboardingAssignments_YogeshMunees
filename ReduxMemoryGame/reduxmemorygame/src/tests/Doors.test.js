import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Doors from "../Doors";
import { Provider } from "react-redux";
import { store } from "../store/Store";
import reducer, {setSeq,nextPos,resetPos} from '../slice/memorySlice';

afterEach(cleanup);

it('increment position after entering the correct door',()=>{
    const previousState = {seq: "LRLRLR",pos: 0};
    const {getByTestId} = render(<Provider store={store}><Doors/></Provider>,{initialState: previousState});
    expect(reducer(previousState,nextPos())).toEqual({seq: "LRLRLR",pos: 1});
})

it('reset position after entering the wrong door',()=>{
    const previousState = {seq: "LRLRLR",pos: 5};
    const {getByTestId} = render(<Provider store={store}><Doors/></Provider>,{initialState: previousState});
    expect(reducer(previousState,resetPos())).toEqual({seq: "LRLRLR",pos: 0});
})
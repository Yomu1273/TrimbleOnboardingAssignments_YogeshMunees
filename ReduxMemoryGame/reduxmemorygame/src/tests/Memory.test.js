import React from "react";
import {render, cleanup, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Memory from "../Memory";
import { Provider } from "react-redux";
import { store } from "../store/Store";
import reducer, {setSeq,nextPos,resetPos} from '../slice/memorySlice';

afterEach(cleanup);

it('generate-question-button should be visible',()=>{
    const {getByTestId} = render(<Provider store={store}><Memory/></Provider>);
    expect(getByTestId('generateQuestionBtn')).toHaveStyle('display:inline-block');
    expect(getByTestId('doorDivision')).toHaveStyle('visibility:hidden');
});

it('sets sequence value in store on clicking generate-question-button',()=>{
    const {getByTestId} = render(<Provider store={store}><Memory/></Provider>);
    fireEvent.click(getByTestId('generateQuestionBtn'));
    const val = getByTestId('questionSentence').innerHTML.substring(19);
    expect(reducer(undefined,setSeq(val))).toEqual({seq:val,pos:0});
});

it('makes question,instruction and go button elements visible on clicking generate-question-button',async()=>{
    const {getByTestId} = render(<Provider store={store}><Memory/></Provider>);
    fireEvent.click(getByTestId('generateQuestionBtn'));
    expect(getByTestId("questionSentence")).toHaveStyle('visibility:visible');
    await waitFor(() => screen.getByText("Memorize the Sequence"));
    await waitFor(() => screen.getByText("GO"));
});

it('makes door division to be visible after clicking go-button',()=>{
    const {getByTestId} = render(<Provider store={store}><Memory/></Provider>);
    fireEvent.click(getByTestId('goBtn'));
    expect(getByTestId("doorDivision")).toBeVisible();
});
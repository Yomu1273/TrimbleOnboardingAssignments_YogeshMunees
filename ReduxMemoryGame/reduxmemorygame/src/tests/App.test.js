import React from 'react';
import {render,cleanup} from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import {store} from '../store/Store';

afterEach(cleanup);

it('should take a snapshot',()=>{
    const {asFragment} = render(<Provider store={store}><App/></Provider>)
    expect(asFragment(<App/>)).toMatchSnapshot()
})
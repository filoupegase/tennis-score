import React from 'react';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer);
export default props => <Provider store={ store } { ...props } />;

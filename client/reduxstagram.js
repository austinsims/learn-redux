import {render} from 'react-dom';
import css from './styles.css';
import Main from './components/Main';
import React from 'react';

const rootEl = document.getElementById('root');
render(<Main />, rootEl);

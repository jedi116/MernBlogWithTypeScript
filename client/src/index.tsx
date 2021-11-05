import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Application from './application'


ReactDom.render(
    <BrowserRouter>
        <Application/>
    </BrowserRouter>,
    document.getElementById('root')
)
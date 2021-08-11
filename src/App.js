import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import home from '../src/component/Home';
import please from '../src/component/Please';


const App = () => {

    const user = false

    return (
        <BrowserRouter>
            <Switch>
                {user ? <Route exact component={home} path="/"/> : <Route component={please} path="/login"/> }
            </Switch>
        </BrowserRouter>
    )
}

export default App

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InputFieldLogin from './component/login/InputFieldLogin';
import Home from '../src/component/home/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={InputFieldLogin} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

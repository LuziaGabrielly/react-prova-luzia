import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Dashboard from '../paginas/Dashboard';
import Forms from '../paginas/Forms';
import Cards from '../paginas/Cards';
import Pricing from '../paginas/Pricing';

export default props =>(
    <Router history={hashHistory}>
        <Route path='/froms' component={Forms}/>
        <Route path='/cards' component={Cards}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/pricing' component={Pricing}/>
        <Redirect from='*' to='/dashboard'/>
    </Router>
)

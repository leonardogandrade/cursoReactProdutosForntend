import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import SignIn from './pages/login_function';
import Search from './components/search';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/products/:id' component={Product} />
            <Route path='/login' component={SignIn} />
            <Route path='/search' component={Search} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
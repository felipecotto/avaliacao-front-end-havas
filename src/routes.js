import  React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Posts from './pages/Posts';


const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
            </Switch>
        </BrowserRouter>
    ); 
}

export default Routes; 
import  React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Post from './pages/Post';
import PostDetail from './pages/PostDetail'; 


const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Post} />
                <Route exact path="/postsdetail/:id" component={PostDetail} />
                <Route exact path="/postsdetail" component={PostDetail} />
            </Switch>
        </BrowserRouter>
    ); 
}

export default Routes; 
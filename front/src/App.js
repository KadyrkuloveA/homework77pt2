import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Posts from "./containers/Posts/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import NewPost from "./containers/NewPost/NewPost";

class App extends Component {
  render() {
    return (
        <Fragment>
            <header>
                <Navbar/>
            </header>
            <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/posts/new" component={NewPost} />
            </Switch>
        </Fragment>
    );
  }
}

export default App;
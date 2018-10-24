import React ,{ Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'

export default class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

//この書き方だと渡せる
//const Topics = ({ match }) => {
//    console.log(match);
//    return <h1>hello{match.params.username}!</h1>;
//};

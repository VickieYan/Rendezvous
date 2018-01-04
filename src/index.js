import React, { Component } from 'react';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware, compose} from 'redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import App from './App';
import { counter } from './index.redux'

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

function Hello(){
    return(
        <div>Hello</div>
    )
}

function World(){
    return(
        <div>World</div>
    )
}

class Test extends Component {
    render() {
        return (<div>{this.props.match.params.location}</div>)
    }
}

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to='/'>一</Link></li>
                        <li><Link to='/two'>二</Link></li>
                        <li><Link to='/three'>三</Link></li>
                    </ul>
                    <Switch>
                        <Route path='/' exact component={App}></Route>
                        <Route path='/two' component={Hello}></Route>
                        <Route path='/three' component={World}></Route>
                        <Route path='/:location' component={Test}></Route>
                    </Switch>
                    
                </div>
            </BrowserRouter>
        </Provider>
        , document.getElementById('root'));
}

render()

store.subscribe(render)



import React, { Component } from 'react';
import { Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import { connect } from 'react-redux'
import { addGun, delGun, addGunAsync} from './index.redux'

class App extends Component {
  render() {
    const num = this.props.num
    return (
      <div className="App">
        <h1>现在有机枪{num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.delGun}>销毁武器</button>
        <button onClick={this.props.addGunAsync}>拖两天</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    num:state
  }
}

const actionCreators = {addGun, delGun, addGunAsync}

App = connect(mapStateToProps, actionCreators)(App)
export default App;

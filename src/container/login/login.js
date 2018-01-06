import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleChange.bind(this)
    }

    register() {
        this.props.history.push('./register')
    }

    handleChange(key,val) {
        this.setState({
            [key]: val
        })
    }

    handleLogin() {

    }

    render() {
        return(
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >用户</InputItem>
                        <InputItem
                            onChange={v=>this.handleChange('pwd',v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button onClick={this.handleLogin} type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>                    
                </WingBlank>
            </div>
        )
    }
}

export default Login
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import Logo from '../../component/logo/logo'
import { register } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom';

@connect(
    state=>state.user,
    {register}
)
class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type: 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key,val) {
        this.setState({
            [key]: val
        })
    }

    handleRegister() {
        this.props.register(this.state)
    }

    render() {
        const RadioItem = Radio.RadioItem
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>: null}
                <Logo />
                <WingBlank>
                {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >用户名</InputItem>
                        <InputItem
                            type="password"
                            onChange={v=>this.handleChange('pwd',v)}
                        >密码</InputItem>
                        <InputItem
                            type="password"
                            onChange={v=>this.handleChange('repeatpwd',v)}
                        >确认密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <List>
                        <RadioItem 
                            checked={this.state.type === 'genius'}
                            onChange={()=>this.handleChange('type','genius')}
                        >牛人</RadioItem>
                        <RadioItem 
                            checked={this.state.type ==='boss'}
                            onChange={()=>this.handleChange('type','boss')}
                        >Boss</RadioItem>
                    </List>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>                    
                </WingBlank>
            </div>
        )
    }
}

export default Register
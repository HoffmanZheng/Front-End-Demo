import React, { Component } from 'react';
import './index.css'
import PubSub from 'pubsub-js'

class Display extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount(){
        this.token = PubSub.subscribe('searchResult',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className='album'>
                {
                    isFirst? <h2>欢迎使用，输入关键字，点击搜索</h2> :
                    isLoading? <h2>加载中...</h2> :
                    err? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className='card'>
                                <a href={userObj.html_url} target='_blank'>
                                    <img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}} /> 
                                </a>
                                <p className='cardText'>
                                    {userObj.login}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Display;

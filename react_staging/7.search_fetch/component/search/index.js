import React, { Component } from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js'

class Search extends Component {

    search = async() => {
        const {keyWord:{value:key}} = this
        PubSub.publish('searchResult', {isLoading:true, isFirst:false, err:''})

        // axios.get(`/api1/search/users?q=${key}`).then(
        //     response => {
        //         console.log('successfully')
        //         console.log(response.data)
        //         PubSub.publish('searchResult',{isLoading:false,users:response.data.items})
        //     },
        //     error => {
        //         console.log("error")
        //         PubSub.publish('searchResult', {isLoading:false,err:error.message})
        //     }
        // )

        // fetch(`/api1/search/users?q=${key}`).then(
        //     response => { 
        //         console.log("联系服务器成功了", response); 
        //         return response.json();
        //     },
        //     error => { 
        //         console.log("联系服务器失败了", error); 
        //         return new Promise(()=>{});
        //         // 在异常的地方中断 promise 链，返回一个初始化状态的 promise
        //     }
        // ).then(
        //     response => { console.log("获取数据成功了", response); },
        //     error => { console.log("获取数据失败了", error); }
        // )

        // await 需要配合 async 一起使用 
        try {
			const response= await fetch(`/api1/search/users?q=${key}`)
			const data = await response.json()
			console.log(data);
			PubSub.publish('searchResult',{isLoading:false,users:data.items})
		} catch (error) {
			console.log('请求出错',error);
			PubSub.publish('searchResult',{isLoading:false,err:error.message})
		}
    }

    render() {
        return (
            <section>
                <h3>搜索 Github 用户</h3>
                <div>
                    <input ref={c => this.keyWord = c} type='text' placeholder='输入关键字进行搜索'/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;

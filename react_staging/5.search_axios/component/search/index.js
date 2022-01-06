import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {

    search = () => {
        const {keyWord:{value:key}} = this
        this.props.updateState({isLoading:true, isFirst:false})
        axios.get(`/api1/search/users?q=${key}`).then(
            response => {
                console.log('successfully')
                console.log(response.data)
                this.props.updateState({isLoading:false,users:response.data.items})
            },
            error => {
                console.log("error")
                this.props.updateState({isLoading:false,err:error.message})
            }
        )
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

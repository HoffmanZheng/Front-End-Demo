import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <section>
                <h3>搜索 Github 用户</h3>
                <div>
                    <input type='text' placeholder='输入关键字进行搜索'/>&nbsp;
                    <button>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;

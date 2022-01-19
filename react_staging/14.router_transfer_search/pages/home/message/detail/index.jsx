import React, { Component } from 'react';
import qs from 'querystring'

const data = [
    {id:'1',content:'你好，中国'},
	{id:'2',content:'你好，尚硅谷'},
	{id:'3',content:'你好，未来的自己'}
]

export default class Detail extends Component {
    
  render() {
      console.log(this.props)
      const {id, title} = qs.parse(this.props.location.search.slice(1))
      return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{data.map((obj)=>{
                if (obj.id === id) {
                    return obj.content
                }
            })}</p>
        </div>
    )
  }
}

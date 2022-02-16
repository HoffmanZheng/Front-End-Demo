import {connect} from 'react-redux'
import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import {createAddPersonAction} from '../../redux/actions/person'


class Person extends Component {

  addPerson = ()=> {
    this.props.addPerson({id: nanoid(), name: this.name.value, age: this.age.value})
    this.name.value = ''
    this.age.value = ''
  }
    
  render() {
    return <div>
                <h3>Person 组件，当前有 {this.props.personList.length} 个人，求和结果为：{this.props.sum}</h3>
                <div>
                  <input ref={c => this.name = c} type='text' placeholder='输入姓名'></input> &nbsp;
                  <input ref={c => this.age = c} type='text' placeholder='输入年龄'></input> &nbsp;
                  <button onClick={this.addPerson}>点击新增</button>
                </div>
                <hr />
                <div>
                  <ul>
                    {console.log(this.props)}
                    {
                      this.props.personList.map(personObj => {
                        return <li key={personObj.id}>姓名：{personObj.name}，年龄：{personObj.age}</li>
                      })
                    }
                  </ul>
                </div>
            </div>;
  }
}

const PersonContainer = connect(
    state => ({personList: state.person, sum: state.count}),
    {addPerson: createAddPersonAction}
  )(Person)
export default PersonContainer
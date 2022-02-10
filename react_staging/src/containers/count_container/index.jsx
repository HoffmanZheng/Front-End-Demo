import Count from '../../components/count'
import {connect} from 'react-redux'
import {createIncrementAction, createDecrementAction, createAynsIncrementAction} from '../../redux/action_creator'


// mapStateToProps 函数就是把状态传递给 UI 组件
// mapDispatchToProps 函数用于传递操作状态的方法

const CountContainer = connect(
    state => ({sum: state}), 
    // dispatch => ({
    //     add: num => dispatch(createIncrementAction(num)), 
    //     subtract: num => dispatch(createDecrementAction(num)),
    //     asyncAdd: (num, time) => dispatch(createAynsIncrementAction(num, time))})
    // )
    {
        add: createIncrementAction,
        subtract: createDecrementAction,
        asyncAdd: createAynsIncrementAction
    }
)(Count)
export default CountContainer
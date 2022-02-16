import Count from '../../components/count'
import {connect} from 'react-redux'
import {createIncrementAction, createDecrementAction, createAynsIncrementAction} from '../../redux/action_creator'


// mapStateToProps 函数就是把状态传递给 UI 组件
function mapStateToProps(state) {
    return {sum: state}
}

// mapDispatchToProps 函数用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
    return {add: num => dispatch(createIncrementAction(num)), 
    subtract: num => dispatch(createDecrementAction(num)),
    asyncAdd: (num, time) => dispatch(createAynsIncrementAction(num, time))}
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count)
export default CountContainer
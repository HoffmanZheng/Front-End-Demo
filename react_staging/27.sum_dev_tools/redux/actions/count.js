import { INCREMENT, DECREMENT } from '../constant'

export const createIncrementAction = num => ({type: INCREMENT, data: num})
export const createDecrementAction = num => ({type: DECREMENT, data: num})
export const createAynsIncrementAction = (num, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(num))
        }, time)
    }
}
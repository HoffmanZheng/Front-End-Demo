import { INCREMENT, DECREMENT } from './constant'

export const createIncrementAction = num => ({type: INCREMENT, data: num})
export const createDecrementAction = num => ({type: DECREMENT, data: num})
export const createAynsIncrementAction = (num, time) => {
    console.log(3)
    return (dispatch) => {
        console.log(4)
        setTimeout(() => {
            dispatch(createIncrementAction(num))
        }, time)
    }
}
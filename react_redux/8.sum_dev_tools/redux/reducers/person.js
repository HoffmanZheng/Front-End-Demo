import { Add_PERSON } from "../constant";

const initState = [{id: 1, name: 'jack', age: 19}]
export default function personReducer(preState=initState, action) {
    const {type, data} = action
    switch (type) {
        case Add_PERSON:
            console.log(data)
            return [data, ...preState]
        default:
            return preState
    }
}
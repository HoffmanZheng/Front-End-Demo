const initState = 0
export default function countReducer(preState=initState, action) {
    console.log("preState: " + preState)
    const {type, data} = action
    switch (type) {
        case 'increment' : 
            return preState + data
        case 'decrement' :
            return preState - data
        default: 
            return preState
    }
}
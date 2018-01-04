const ADD_GUN = '加机关枪'
const DEL_GUN = '减机关抢'

//reducer
export function counter(state, action) {
    switch(action.type) {
        case ADD_GUN:
            return state+1
        case DEL_GUN:
            return state-1
        default:
            return 10
    }
}

//action creater
export function addGun() {
    return {type: ADD_GUN}
}

export function delGun() {
    return {type: DEL_GUN}
}

export function addGunAsync() {
    return dispatch => {
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}
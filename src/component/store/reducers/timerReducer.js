const defaultState = {time: 0, active: false, pause: true, timeout:null};

export  function timerReducer(state = defaultState, action) {
    switch (action.type) {
        case 'tick':
            return {...state , time:state.time + action.payload}
        case 'start':
            return {...state,  active: true, pause: false};
        case 'pause':
            return {...state, pause: !state.pause};
        case 'reset':
            return {...state, active: false, time: 0};
        case 'timeout':
            return {...state, timeout: action.payload}
        default:
          return   state;

    }
}
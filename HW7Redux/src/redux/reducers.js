const initialState = {
    number: 0
};

export default function numberReducer(state = initialState, action) {

    
    switch (action.type) {
        case 'INCREMENT_NUMBER':
        return {
            ...state,
            number: state.number + 1
        };
        default:
        return state;
    }
}

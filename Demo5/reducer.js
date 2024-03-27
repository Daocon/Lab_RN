const initState = {
    dem: 0,
};
const demReducer = (state = initState, action) => {
    switch (action.type) {
        case 'tang':
            return { ...state, dem: state.dem + 1 };
        case 'giam':
            return { ...state, dem: state.dem - 1 };
        default:
            return state;
    }
};

export default demReducer
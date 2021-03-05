const initialState = {
    user: {},
    isAuthenticated: false,
    loader: false,
    buckets: [],
    todos: [],
    success: false
}



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADER":
            return {
                ...state,
                loader: action.payload
            }
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loader: false,
            }
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload,
                loader: false
            }
        case "SET_BUCKET":
            return {
                ...state,
                buckets: [...state.buckets,action.payload],
                loader: false,
            }
        case "SET_BUCKETS":
            return {
                ...state,
                buckets: action.payload,
                loader: false
            }

        case "SET_SUCCESS":
            return {
                ...state,
                success: action.payload
            }    
        case "UPDATE_ADDED_USER":
            return {
                ...state,
                users: state.users.map(user => user._id === action.payload._id ? action.payload : user),
                loader: false
            }
        case "DELETE_ADDED_USER":
            return {
                ...state,
                users: state.users.filter(obj => {
                    return obj._id !== action.payload._id
                }),
                loader: false
            }
        case "DELETE_USER":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: false,
                loader: false
            }
        default:
            return state
    }
}

export default userReducer
const initialState = {
    loading: false,
    data: [],
    error: "",
    history: [],
};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true };
        case "FETCH_DATA":
            return { ...state, data: action.payload, loading: false, error: '' };
        case "ERROR":
            return { ...state, error: action.payload, loading: false };
        case "ADD_HISTORY": {
            if (!check(action.payload)) {
                return {
                    ...state,
                    history: [...state.history, action.payload],
                };
            }

            function check(obj) {
                const word = obj.word;
                for (const item of state.history) {
                    if (item.word === word) return true;
                }
                return false;
            }
            return state;
        }
        default:
            return state;
    }
};

export default fetchReducer;

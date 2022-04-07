const initialState = {
    whiskys: [],
    list: []
};

export const whiskyReducer = (state = initialState, action) => {
    switch (action.type) {


        case 'SET_WHISKYS':
            return {
                ...state, whiskys: action.payload
            };


        case 'ADD_WHISKY':
            //Action som lägger till object i listan
            //kollar om produkten finns med i "list" om den gör det så ska man inte kunna lägga
            //till den igen. Annars så ska man kunna lägga produkten i "list".
            const item = state.whiskys.find(prod => prod.id === action.payload.id)
            const inFaveList = state.list.find((item) =>
                item.id === action.payload.id ? true : false
            )
            return {
                ...state, list: inFaveList ? state.list.map((item) => item.id === action.payload.id ? {
                    ...item
                } : item) : [...state.list, {
                    ...item
                }]

            };
            //Action som tar bort object i listan
        case 'REMOVE_WHISKY':
            return {
                ...state, list: state.list.filter((prod) => prod.id !== action.payload.id)
            };

        default:
            return state
    }
};
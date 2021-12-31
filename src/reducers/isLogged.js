const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    };
};

export default loggedReducer;

// Per ancorare questi due state (logged e counter),
// provvedo ad importarli in index.js (quello di src).
// Prima, però, usufruisco della funzione combineReducers
// per unire questi due reducers in index.js (di questa cartella).
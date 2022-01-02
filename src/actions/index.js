// export const increment = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

// Esporto in App.js per le funzionalità dei buttons

// Adesso che ho aggiunto un parametro alla funzionalità
// che incrementa il button di (5), posso usufruire della 
// proprietà payload.

export const increment = (multiply) => {
    return {
        type: 'INCREMENT',
        payload: multiply
    };
};

//* RECAP:
// Le azioni sono oggetti JS con due proprietà chiave:
// type e payload. 
// Il type dice a redux quale modifica voglio apportare,
// mentre il payload contiene le informazioni con cui
// intendo modificarla.

// ==> continua su counter (reducers)
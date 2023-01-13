const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'YO'},
        {id: 3, message: 'How are you?'},
    ],
    dialogsData: [
        {id: 1, name: 'Svieta'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Vika'},
        {id: 5, name: 'Lola'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessage}],
            }
        default:
            return state;
    }
}

export const messageActionCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage: newMessage});

export default dialogsReducer;
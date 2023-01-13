import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {'id': 1, 'message': 'Hi, how are you?', 'likesCount': 12},
                {'id': 2, 'message': 'It\'s my first post', 'likesCount': 25},
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                {'id': 1, 'messageInfo': {'message': 'Hi'}},
                {'id': 2, 'messageInfo': {'message': 'YO'}},
                {'id': 3, 'messageInfo': {'message': 'How are you?'}},
            ],
            newMessageText: '',
            dialogsData: [
                {'id': 1, 'name': 'Svieta'},
                {'id': 2, 'name': 'Alex'},
                {'id': 3, 'name': 'Dima'},
                {'id': 4, 'name': 'Vika'},
                {'id': 5, 'name': 'Lola'},
            ],
        },
        sidebar: {
            friends: [
                {'id': 2, 'name': 'Alex', 'avatar': ''},
                {'id': 3, 'name': 'Dima', 'avatar': ''},
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
}

window.state = store.getState();
export default store;
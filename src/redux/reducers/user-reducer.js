import produce from "immer";

const defaultState = {
    usersList: [
        { name: "Riyaz", localId: 101, description: "React DeveFrontendloper", id: 1 },
        { name: "Asmin", localId: 102, description: " Developer", id: 2 },
        { name: "Rasmita", localId: 103, description: "Node.js Developer", id: 3 },
    ],
    selectedUser: null
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case "CREATE_USER": {
            // console.log("Inside Case", action.user);
            const nextState = produce(state, (draftState) => {
                draftState.usersList.push(action.user);
            });
            return nextState;
        }
        case "SELECT_USER": {
            const nextState = produce(state, (draftState) => {
                draftState.selectedUser = action.user;
            });
            return nextState;
        }
        case "ADD_TO_DELETE_LIST": {
            const nextState = produce(state, (draftState) => {
                draftState.usersList.forEach((user) => {
                    if (user.id === action.user.id)
                        user.toBeDeleted = true;
                });
            });
            return nextState;
        }
        case "REMOVE_FROM_DELETE_LIST": {
            const nextState = produce(state, (draftState) => {
                draftState.usersList.forEach((user) => {
                    if (user.id === action.user.id)
                        user.toBeDeleted = false;
                });
            });
            return nextState;
        }
        case "DELETE_USERS": {
            const nextState = produce(state, (draftState) => {
                const newUserList = draftState.usersList.filter((user) => {
                    if (user.toBeDeleted)
                        return false;
                    else
                        return true;
                });
                draftState.usersList = newUserList;
            });
            return nextState;
        }
        default:
            return state;
    }
}
import { ActionType, SetIdUsuario, SetUsuario, UserActions } from "./useractions";
import { UserState } from "./userstate";

export function userReducer(state: UserState, action: UserActions) : UserState {
    switch (action.type) {
        case ActionType.SetIdUsuario:
            return {
                ...state,
                idusuario: action.payload
            }
        case ActionType.SetUsuario:
            return {
                ...state,
                usuario: action.payload
            }
        default:
            return state;
    }
}

// helper functions to simplify the caller
export const setIdUsuario = (idusuario: string): SetIdUsuario => ({
    type: ActionType.SetIdUsuario,
    payload: idusuario
})

export const setUsuario = (usuario: string): SetUsuario => ({
    type: ActionType.SetUsuario,
    payload: usuario
})
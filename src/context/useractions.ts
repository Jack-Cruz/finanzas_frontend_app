export enum ActionType {
    SetIdUsuario,
    SetUsuario
}

export interface SetIdUsuario {
    type: ActionType.SetIdUsuario;
    payload: string;
}

export interface SetUsuario {
    type: ActionType.SetUsuario;
    payload: string;
}

export type UserActions = SetIdUsuario | SetUsuario;

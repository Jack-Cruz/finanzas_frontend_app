export enum ActionType {
    SetId
}

export interface SetId {
    type: ActionType.SetId;
    payload: string;
}

export type UserActions = SetId;

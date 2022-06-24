export interface UserState {
    idusuario: string | null;
    usuario: string | null;
}

export const initialUserState: UserState = {
    idusuario: '1',
    usuario: 'Pedro'
}
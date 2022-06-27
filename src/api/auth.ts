import request from './api';
import { Bonista, Credentials } from "../interfaces/Bonista";

const authService = {
  login: (credential: Credentials) => request.get<Bonista>(`Bonista/credential/${credential.usuario}/${credential.contrasenia}`),
  register: (bonista: Bonista) => request.post<Bonista>("Bonista", bonista),
  get: (id: string) => request.get(`Bonista/${id}`)
}

export default authService;
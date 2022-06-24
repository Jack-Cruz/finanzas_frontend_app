import request from './api';
import { Bonista, Credentials } from "../interfaces/Bonista";

const authService = {
  login: async (credential: Credentials) => request.post<Credentials>("authenticate/login", credential),
  register: async (bonista: Bonista) => request.post<Bonista>("authenticate/register", bonista)
}

export default authService;
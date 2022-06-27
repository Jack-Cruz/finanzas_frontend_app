
import { FlujoCaja } from '../interfaces/Bono'
import request from './api'

const apiFlujo = {
    get: async (idbono: string) => await request.get<FlujoCaja[]>(`FLujo/${idbono}`),
}

export default apiFlujo
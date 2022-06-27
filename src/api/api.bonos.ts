
import request from './api'

const apiBonos = {
    get: async (id: string) => await request.get(`Bono/${id}`),
    post: async (idbonista: string, body: {}) => await request.post(`Bono/${idbonista}`, body),
    delete: async (idbonista: string, idbono: string) => await request.delete(`Bono/${idbonista}/${idbono}`),
    put: async (idbonista: string, idbono: string, body: {}) => await request.put(`Bono/${idbonista}/${idbono}`, body),
}

export default apiBonos
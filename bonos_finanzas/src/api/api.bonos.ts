
import { request } from './api'

const apiBonos = {
    get: async (id: number) => await request.get(`/bonos/${id}`),
    post: async (id: number, body: {}) => await request.post(`/bonos/${id}`, body),
}

export default apiBonos
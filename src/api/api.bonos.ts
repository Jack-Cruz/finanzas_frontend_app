
import request from './api'

const apiBonos = {
    get: async (id: string) => await request.get(`/bonos/${id}`),
    post: async (userId: string, body: {}) => await request.post(`/bonosuser/${userId}`, body),
}

export default apiBonos
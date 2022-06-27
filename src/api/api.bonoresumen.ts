
import request from './api'

const apiBonosResumen = {
    get: async (idbonista: string) => await request.get(`BonoResumen/idbonista/${idbonista}`),
}

export default apiBonosResumen
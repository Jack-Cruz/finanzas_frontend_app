export interface Bono {
  idbono?: string
  idbonista?: string
  valnominal: number
  valcomercial: number
  moneda: string
  anios: number
  frecpago: string
  tipotasa: string
  tasainteres: number
  tasadescuento: number
  imprenta: number
  fecemision: Date
  percprima: number
  percestructuracion: number
  perccolocacion: number
  percflotacion: number
  perccavali: number
}

export interface BonoResumen {
  idresumen: string,
  idbono: string,
  precio: number,
  duracion: number,
  duracionmodificada: number,
  convexidad: number,
  TIR: number,
}

export interface FlujoCaja {
  idflujo: string,
  idbono: string,
  n: number,
  bono: number,
  interes: number,
  cuota: number,
  amortizacion: number,
  prima: number,
  escudo: number,
  flujoemisor: number,
  flujoemisorescudo: number,
  flujobonista: number,
  flujoactual: number,
  faplazo: number,
  convexidad: number
}
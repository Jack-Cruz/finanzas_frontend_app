export interface Bono {
  idbono?: string
  idbonista?: string
  valnominal: number
  valcomercial: number
  moneda: string
  anios: number
  frecpago: number
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
  capitalizacion: number
}

export interface BonoResumen {
  idresumen: string,
  idbono: string,
  precio: number,
  duracion: number,
  duracionmod: number,
  convexidad: number,
  tirbonista: number,
  moneda: string
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
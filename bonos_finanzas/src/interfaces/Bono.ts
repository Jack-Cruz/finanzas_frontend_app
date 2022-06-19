export interface Bono {
    id: number
    valor_nominal: number
    valor_comercial: number
    fecha_emision: Date
    frecuencia_pago: number
    numero_anios: number
    tipo_tasa: string
    tasa_de_interes: number
    tasa_anual_descuento: number
    impuesto: number
    prima: number
    estructuracion: number
    colocacion: number
    flotacion: number
    cavali: number
}

export interface BonoResumen {
 id: number,
 precio: number,
 duracion: number,
 duracion_modificada: number,
 convexidad: number,
 TIR: number
}

export interface FlujoCaja {
  id: number,
  monto: number,
  bono: number,
  cupon: number,
  cuota: number,
  escudo: number,
  amortizacion: number,
  flujo_bonista: number,
  flujo_actual: number,
};
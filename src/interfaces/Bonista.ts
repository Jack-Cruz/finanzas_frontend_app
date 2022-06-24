export interface Bonista {
  idbonista?: string,
  nombre: string,
  apellido: string,
  DNI: string,
  correo: string,
  celular: string,
  usuario: string,
  contrasenia: string,
  RUC: string,
  direccion: string,
  region: string,
  provincia: string,
  distrito: string
}

export interface Credentials {
  usuario: string,
  contrasenia: string
}
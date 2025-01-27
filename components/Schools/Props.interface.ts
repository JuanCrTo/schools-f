export enum TipoSchool {
  PRIVADO = "Privado",
  PUBLICO = "Publico",
}

export enum Gender {
  MIXTO = "Mixto",
  MASCULINO = "Masculino",
  FEMENINO = "Femenino",
}

export interface IProps {
  _id: string;
  nombre: string;
  telefono: string;
  descripcion: string;
  servicios: string;
  ubicacion: string;
  genero: Gender;
  tipoInstitucion: TipoSchool;
  numEstudiantes: number;
  numProfesores: number;
  precioMensual: number;
  precioMatricula: number;
  icfes: number;
  cantidadSalones: number;
  cantidadGrados: number;
}

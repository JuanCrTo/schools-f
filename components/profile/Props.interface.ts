export enum TipoInstitucion {
  PRIVADO = 'Privado',
  PUBLICO = 'Publico',
}

export enum Genero {
  MIXTO = "Mixto",
  MASCULINO  = "Masculino",
  FEMENINO  = "Femenino",
}

export interface IStudentProfile {
  nombre: string;
  telefono: string;
}

export interface ISchoolProfile {
  nombre: string;
  telefono: string;
  descripcion: string;
  servicios: string;
  ubicacion: string;
  genero: Genero;
  tipoInstitucion: TipoInstitucion;
  numEstudiantes: number;
  numProfesores: number;
  precioMensual: number;
  precioMatricula: number;
  icfes: number;
  cantidadSalones: number;
  cantidadGrados: number;
}
export enum TipoInstitucion {
  PRIVADO = 'Privado',
  PUBLICO = 'Público',
}

export enum Genero {
  MIXTO = "Mixto",
  HOMBRES = "Hombres",
  MUJERES = "Mujeres",
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
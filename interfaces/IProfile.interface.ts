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
  precioMinMensual: number;
  precioMaxMensual: number;
  precioMinMatricula: number;
  precioMaxMatricula: number;
  icfesMinimo: number;
  cantidadProfesoresMin: number;
  cantidadProfesoresMax: number;
  cantidadSalonesMin: number;
  cantidadSalonesMax: number;
  cantidadGradosMin: number;
  cantidadGradosMax: number;
  cantidadAlumnosMin: number;
  cantidadAlumnosMax: number;
}
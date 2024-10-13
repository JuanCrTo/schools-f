export enum TipoInstitucion {
    PRIVADO = 'Privado',
    PUBLICO = 'Publico',
  }

export enum Genero {
    MASCULINO = 'Masculino',
    FEMENINO = 'Femenino',
    MIXTO = 'Mixto',
}

export interface ISchool {
    id: string;
    nombre: string;
    telefono: string;
    genero: Genero;
    descripcion: string;
    servicios: string;
    ubicacion: string;
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

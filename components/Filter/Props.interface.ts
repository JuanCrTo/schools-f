export enum TipoInstitucion {
  PRIVADO = "Privado",
  PUBLICO = "Publico",
}

export enum Genero {
  MIXTO = "Mixto",
  MASCULINO = "Masculino",
  FEMENINO = "Femenino",
}

export interface Iprops {
    nombre: string;
    tipoInstitucion: TipoInstitucion;
    genero: Genero;
    precioMinMensual: number;
    precioMaxMensual: number;
    precioMinMatricula: number;
    precioMaxMatricula: number;
    icfes: number;
    cantidadProfesoresMin: number;
    cantidadProfesoresMax: number;
    cantidadSalonesMin: number;
    cantidadSalonesMax: number;
    cantidadGradosMin: number;
    cantidadGradosMax: number;
    cantidadAlumnosMin: number;
    cantidadAlumnosMax: number;
}

export interface IFilterProps {
  initialFilters: Iprops;
  onSubmit: (filtros: Iprops) => void;
}

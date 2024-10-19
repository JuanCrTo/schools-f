export enum TipoInstitucion {
  PRIVADO = "Privado",
  PUBLICO = "Publico",
}

export enum Genero {
  MIXTO = "Mixto",
  HOMBRES = "Hombres",
  MUJERES = "Mujeres",
}

export interface IFilter {
    nombre: string;
    tipoInstitucion: TipoInstitucion;
    genero: Genero;
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

export interface IFilterProps {
  initialFilters: IFilter;
  onSubmit: (filtros: IFilter) => void;
}

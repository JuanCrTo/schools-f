export interface IFilter {
    nombre: string;
    tipoInstitucion: string;
    ubicacion: string;
    genero: string;
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

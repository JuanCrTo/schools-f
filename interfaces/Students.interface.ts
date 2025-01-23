export enum TipoStudent {
    COLEGIO = 'Colegio',
    ESTUDIANTE = 'Padre/Estudiante',
  }
  
  export interface IStudent {
    nombre: string;
    email: string;
    tipoStudent: TipoStudent;
  }
  
  export interface IRegistro extends IStudent {
    password: string;
  }
export enum TipoStudent {
    COLEGIO = 'Colegio',
    ESTUDIANTE = 'Estudiante',
  }
  
  export interface IProps {
    nombre: string;
    email: string;
    tipoStudent: TipoStudent;
  }
  
  export interface IRegistro extends IProps {
    password: string;
  }
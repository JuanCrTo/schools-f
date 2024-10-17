export enum TipoUsuario {
    COLEGIO = 'Colegio',
    PADREESTUDIANTE = 'Padre/Estudiante',
  }
  
  export interface IUserBase {
    nombre: string;
    email: string;
    tipoUsuario: TipoUsuario;
  }
  
  export interface IRegistro extends IUserBase {
    password: string;
  }
  
  export interface IUserProfile extends IUserBase {
    telefono: string;
  }  
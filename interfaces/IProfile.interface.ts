// IProfile.interface.ts
export enum TipoInstitucion {
  PRIVADO = 'Privado',
  PUBLICO = 'Público',
}

export interface IStudentProfile {
  nombre: string;
  email: string; // Este podría no ser editable
  telefono: string;
  // Otros campos relevantes para el perfil de estudiante
}

export interface ISchoolProfile {
  nombre: string;
  email: string; // Este podría no ser editable
  telefono: string;
  direccion: string;
  tipoInstitucion: TipoInstitucion;
  numEstudiantes: number;
  numProfesores: number;
  descripcion: string; // Campo para la descripción
  servicios: string[]; // Lista de servicios
}
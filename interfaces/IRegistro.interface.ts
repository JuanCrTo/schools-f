export interface IRegistro {
  nombre: string;
  email: string;
  password: string;
  tipoUsuario: "Colegio" | "Padre/Estudiante";
}

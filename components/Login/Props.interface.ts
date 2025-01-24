  export interface LoginFormValues {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    user: {
      _id: string;
      tipoUsuario: "Colegio" | "Estudiante";
    };
  }
  
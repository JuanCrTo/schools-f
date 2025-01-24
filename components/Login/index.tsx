import React, { useEffect, useState } from "react";
import { useUserContext } from "@/providers/UserContext";
import { useRouter } from "next/router";
import styles from "@/styles/components/Login.module.scss";
import { LoginFormValues, LoginResponse } from "./Props.interface";

// Componente que renderiza el formulario de inicio de sesión

const Login: React.FC = () => {
  const { setUser, userId, refreshUser } = useUserContext();
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      router.push("/");
    }
  }, [userId, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }

      const data: LoginResponse = await response.json();

      const { _id, tipoUsuario } = data.user;

      setUser(_id, tipoUsuario);
      refreshUser();

      router.push("/");
    } catch (err) {
      setError("Inicio de sesión fallido. Verifica tus credenciales.");
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return (
    <div className={styles["login-container"]}>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Login;

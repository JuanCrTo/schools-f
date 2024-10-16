import React, { useEffect, useState } from "react";
import { useUserContext } from "@/components/UserContext";
import { useRouter } from "next/router";
import styles from "@/styles/components/Login.module.scss";

const Login: React.FC = () => {
  const { setUser, userId, refreshUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }

      const data = await response.json();

      console.log("Respuesta de la API de login:", data);

      const userId = data.user._id;
      const tipoUsuario = data.user.tipoUsuario;

      console.log("userId:", userId, "tipoUsuario:", tipoUsuario);

      setUser(userId, tipoUsuario);
      refreshUser();

      router.push("/");
      console.log("Datos del usuario:", data);
      console.log("userId:", userId, "tipoUsuario:", tipoUsuario);
    } catch (err) {
      setError("Inicio de sesión fallido. Verifica tus credenciales.");
      console.error("Error en la solicitud:", err);
    }
  };

  return (
    <div className={styles['login-container']}>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

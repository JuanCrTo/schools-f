import { IRegistro, TipoUsuario } from "@/interfaces/IUser.interface";
import React, { useState } from "react";
import styles from "@/styles/components/RegisterForm.module.scss"

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<IRegistro>({
    nombre: "",
    email: "",
    password: "",
    tipoUsuario: TipoUsuario.PADREESTUDIANTE,
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Cambio en el input: ${name} = ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Estado de formData después del cambio:", formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Intentando registrar usuario con datos:", formData);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula, un número y un símbolo."
      );
      console.log("Contraseña no válida");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Respuesta del servidor:", response);

      if (response.status === 409) {
        setError("El email ya está registrado.");
        console.log("Error de registro: El email ya está registrado.");
        return;
      }

      if (!response.ok) {
        setError("Hubo un error al registrar el usuario.");
        console.log(
          "Error de registro: Hubo un error al registrar el usuario."
        );
        return;
      }

      const data = await response.json();
      console.log("Usuario registrado:", data);
      setFormData({
        nombre: "",
        email: "",
        password: "",
        tipoUsuario: TipoUsuario.PADREESTUDIANTE,
      });
      setSuccessMessage("Registro exitoso. ¡Bienvenido!");
      console.log("Mensaje de éxito mostrado:", successMessage);
      setError("");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setError("Error al conectar con el servidor.");
      console.log("Error de conexión:", error);
    }
  };

  return (
    <div className={styles['form-container']}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
          <select
            id="tipoUsuario"
            name="tipoUsuario"
            value={formData.tipoUsuario}
            onChange={handleChange}
          >
            <option value={TipoUsuario.PADREESTUDIANTE}>Padre/Estudiante</option>
            <option value={TipoUsuario.COLEGIO}>Colegio</option>
          </select>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {error && <p className={`${styles.error}`}>{error}</p>}
        {successMessage && <p className={`${styles.success}`}>{successMessage}</p>}

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUpForm;

import { IRegistro, TipoUsuario } from "@/interfaces/IUser.interface";
import React, { useState } from "react";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<IRegistro>({
    nombre: "",
    email: "",
    password: "",
    tipoUsuario: TipoUsuario.PADREESTUDIANTE,
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula, un número y un símbolo."
      );
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 409) {
        setError("El email ya está registrado.");
        return;
      }

      if (!response.ok) {
        setError("Hubo un error al registrar el usuario.");
        return;
      }

      const data = await response.json();
      console.log("Usuario registrado:", data);
      setError("");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
        <select
          id="tipoUsuario"
          name="tipoUsuario"
          value={formData.tipoUsuario}
          onChange={handleChange}
        >
          <option value="Padre/Estudiante">Padre/Estudiante</option>
          <option value="Colegio">Colegio</option>
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
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;

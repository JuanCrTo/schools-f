import React, { useState } from "react";
import styles from "@/styles/components/Filter.module.scss";

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const [filtros, setFiltros] = useState({
    nombre: "",
    tipoInstitucion: "",
    ubicacion: "",
    precioMinMensual: "",
    precioMaxMensual: "",
    precioMinMatricula: "",
    precioMaxMatricula: "",
    icfesMinimo: "",
    cantidadProfesoresMin: "",
    cantidadProfesoresMax: "",
    cantidadSalonesMin: "",
    cantidadSalonesMax: "",
    cantidadGradosMin: "",
    cantidadGradosMax: "",
    genero: "",
    cantidadAlumnosMin: "",
    cantidadAlumnosMax: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Filtros aplicados:", filtros);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre de Colegio:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={filtros.nombre}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tipoInstitucion">Tipo de Institución:</label>
          <select
            id="tipoInstitucion"
            name="tipoInstitucion"
            value={filtros.tipoInstitucion}
            onChange={handleChange}
          >
            <option value="">Seleccione...</option>
            <option value="Privado">Privado</option>
            <option value="Público">Público</option>
          </select>
        </div>

        <div>
          <label htmlFor="ubicacion">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={filtros.ubicacion}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="precioMinMensual">Precio Mínimo Mensual:</label>
          <input
            type="number"
            id="precioMinMensual"
            name="precioMinMensual"
            value={filtros.precioMinMensual}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="precioMaxMensual">Precio Máximo Mensual:</label>
          <input
            type="number"
            id="precioMaxMensual"
            name="precioMaxMensual"
            value={filtros.precioMaxMensual}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="precioMinMatricula">Precio Mínimo Matricular:</label>
          <input
            type="number"
            id="precioMinMatricula"
            name="precioMinMatricula"
            value={filtros.precioMinMatricula}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="precioMaxMatricula">Precio Máximo Matricular:</label>
          <input
            type="number"
            id="precioMaxMatricula"
            name="precioMaxMatricula"
            value={filtros.precioMaxMatricula}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="icfesMinimo">ICFES Mínimo:</label>
          <input
            type="number"
            id="icfesMinimo"
            name="icfesMinimo"
            value={filtros.icfesMinimo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cantidadProfesoresMin">
            Cantidad de Profesores Mínimo:
          </label>
          <input
            type="number"
            id="cantidadProfesoresMin"
            name="cantidadProfesoresMin"
            value={filtros.cantidadProfesoresMin}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cantidadProfesoresMax">
            Cantidad de Profesores Máximo:
          </label>
          <input
            type="number"
            id="cantidadProfesoresMax"
            name="cantidadProfesoresMax"
            value={filtros.cantidadProfesoresMax}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cantidadSalonesMin">
            Cantidad de Salones Mínimo:
          </label>
          <input
            type="number"
            id="cantidadSalonesMin"
            name="cantidadSalonesMin"
            value={filtros.cantidadSalonesMin}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cantidadSalonesMax">
            Cantidad de Salones Máximo:
          </label>
          <input
            type="number"
            id="cantidadSalonesMax"
            name="cantidadSalonesMax"
            value={filtros.cantidadSalonesMax}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cantidadGradosMin">Cantidad de Grados Mínimo:</label>
          <input
            type="number"
            id="cantidadGradosMin"
            name="cantidadGradosMin"
            value={filtros.cantidadGradosMin}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cantidadGradosMax">Cantidad de Grados Máximo:</label>
          <input
            type="number"
            id="cantidadGradosMax"
            name="cantidadGradosMax"
            value={filtros.cantidadGradosMax}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="genero">Género:</label>
          <select
            id="genero"
            name="genero"
            value={filtros.genero}
            onChange={handleChange}
          >
            <option value="">Seleccione...</option>
            <option value="Niños">Niños</option>
            <option value="Niñas">Niñas</option>
            <option value="Mixto">Mixto</option>
          </select>
        </div>

        <div>
          <label htmlFor="cantidadAlumnosMin">
            Cantidad de Alumnos Mínimo:
          </label>
          <input
            type="number"
            id="cantidadAlumnosMin"
            name="cantidadAlumnosMin"
            value={filtros.cantidadAlumnosMin}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cantidadAlumnosMax">
            Cantidad de Alumnos Máximo:
          </label>
          <input
            type="number"
            id="cantidadAlumnosMax"
            name="cantidadAlumnosMax"
            value={filtros.cantidadAlumnosMax}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.button}>
          Aplicar Filtros
        </button>
      </form>
    </div>
  );
};

export default Filter;

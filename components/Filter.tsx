import React, { useState } from "react";
import styles from "@/styles/components/Filter.module.scss";
import { IFilter, IFilterProps } from "@/interfaces/IFilter.interface";

const Filter: React.FC<IFilterProps> = ({ onSubmit }) => {
  const [filtros, setFiltros] = useState<IFilter>({
    nombre: "",
    tipoInstitucion: "",
    ubicacion: "",
    precioMinMensual: 0,
    precioMaxMensual: 0,
    precioMinMatricula: 0,
    precioMaxMatricula: 0,
    icfesMinimo: 0,
    cantidadProfesoresMin: 0,
    cantidadProfesoresMax: 0,
    cantidadSalonesMin: 0,
    cantidadSalonesMax: 0,
    cantidadGradosMin: 0,
    cantidadGradosMax: 0,
    genero: "",
    cantidadAlumnosMin: 0,
    cantidadAlumnosMax: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (
      (name.includes("precio") ||
        name.includes("cantidad") ||
        name.includes("icfes")) &&
      Number(value) < 0
    ) {
      return;
    }

    setFiltros({
      ...filtros,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Filtros aplicados:", filtros);
    onSubmit(filtros);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre de Colegio:</label>
          <input
            className={styles.formInput}
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
            className={styles.selectField}
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

        <div className={styles.formGroup}>
          <label htmlFor="ubicacion">Ubicación:</label>
          <input
            className={styles.formInput}
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={filtros.ubicacion}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="precioMinMensual">Precio Mínimo Mensual:</label>
          <input
            className={styles.formInput}
            type="number"
            id="precioMinMensual"
            name="precioMinMensual"
            value={filtros.precioMinMensual}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="precioMaxMensual">Precio Máximo Mensual:</label>
          <input
            className={styles.formInput}
            type="number"
            id="precioMaxMensual"
            name="precioMaxMensual"
            value={filtros.precioMaxMensual}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="precioMinMatricula">Precio Mínimo Matricular:</label>
          <input
            className={styles.formInput}
            type="number"
            id="precioMinMatricula"
            name="precioMinMatricula"
            value={filtros.precioMinMatricula}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="precioMaxMatricula">Precio Máximo Matricular:</label>
          <input
            className={styles.formInput}
            type="number"
            id="precioMaxMatricula"
            name="precioMaxMatricula"
            value={filtros.precioMaxMatricula}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="icfesMinimo">ICFES Mínimo:</label>
          <input
            className={styles.formInput}
            type="number"
            id="icfesMinimo"
            name="icfesMinimo"
            value={filtros.icfesMinimo}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cantidadProfesoresMin">Profesores Mínimo:</label>
          <input
            className={styles.formInput}
            type="number"
            id="cantidadProfesoresMin"
            name="cantidadProfesoresMin"
            value={filtros.cantidadProfesoresMin}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cantidadProfesoresMax">Profesores Máximo:</label>
          <input
            className={styles.formInput}
            type="number"
            id="cantidadProfesoresMax"
            name="cantidadProfesoresMax"
            value={filtros.cantidadProfesoresMax}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cantidadSalonesMin">Salones Mínimo:</label>
          <input
            className={styles.formInput}
            type="number"
            id="cantidadSalonesMin"
            name="cantidadSalonesMin"
            value={filtros.cantidadSalonesMin}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cantidadSalonesMax">Salones Máximo:</label>
          <input
            className={styles.formInput}
            type="number"
            id="cantidadSalonesMax"
            name="cantidadSalonesMax"
            value={filtros.cantidadSalonesMax}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cantidadGradosMin">Grados Mínimo:</label>
          <input
            className={styles.formInput}
            type="number"
            id="cantidadGradosMin"
            name="cantidadGradosMin"
            value={filtros.cantidadGradosMin}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cantidadGradosMax">Grados Máximo:</label>
          <input
            className={styles.formInput}
            type="number"
            id="cantidadGradosMax"
            name="cantidadGradosMax"
            value={filtros.cantidadGradosMax}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="genero">Género:</label>
          <select
            className={styles.selectField}
            id="genero"
            name="genero"
            value={filtros.genero}
            onChange={handleChange}
          >
            <option value="">Seleccione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Mixto">Mixto</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cantidadAlumnosMin">Alumnos Mínimo:</label>
          <input
            className={styles.formInput}
            type="number"
            id="cantidadAlumnosMin"
            name="cantidadAlumnosMin"
            value={filtros.cantidadAlumnosMin}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cantidadAlumnosMax">Alumnos Máximo:</label>
          <input
            className={styles.formInput}
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

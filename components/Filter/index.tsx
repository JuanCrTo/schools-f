import React, { useState } from "react";
import styles from "@/styles/components/Filter.module.scss";
import {
  Iprops,
  IFilterProps,
  TipoInstitucion,
  Genero,
} from "@/components/Filter/Props.interface";

// Componente que renderiza el formulario de filtros

const Filter: React.FC<IFilterProps> = ({ initialFilters, onSubmit }) => {
  const [filtros, setFiltros] = useState<Iprops>(initialFilters);

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
    onSubmit(filtros);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        {/* nombre */}
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

        {/* tipo institucion */}
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
            <option value={TipoInstitucion.PRIVADO}>
              {TipoInstitucion.PRIVADO}
            </option>
            <option value={TipoInstitucion.PUBLICO}>
              {TipoInstitucion.PUBLICO}
            </option>
          </select>
        </div>

        {/* genero */}
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
            <option value={Genero.MASCULINO}>{Genero.MASCULINO}</option>
            <option value={Genero.FEMENINO}>{Genero.FEMENINO}</option>
            <option value={Genero.MIXTO}>{Genero.MIXTO}</option>
          </select>
        </div>

        {/* Filtros Agrupados */}
        {/* precio mensual */}
        <div className={styles.formGroup}>
          <label>Precio Mensual:</label>
          <div className={styles.rangeGroup}>
            <input
              className={styles.formInput}
              type="number"
              placeholder="Mín"
              id="precioMinMensual"
              name="precioMinMensual"
              value={filtros.precioMinMensual}
              onChange={handleChange}
            />
            <input
              className={styles.formInput}
              type="number"
              placeholder="Máx"
              id="precioMaxMensual"
              name="precioMaxMensual"
              value={filtros.precioMaxMensual}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* matricula */}
        <div className={styles.formGroup}>
          <label>Precio Matrícula:</label>
          <div className={styles.rangeGroup}>
            <input
              className={styles.formInput}
              type="number"
              placeholder="Mín"
              id="precioMinMatricula"
              name="precioMinMatricula"
              value={filtros.precioMinMatricula}
              onChange={handleChange}
            />
            <input
              className={styles.formInput}
              type="number"
              placeholder="Máx"
              id="precioMaxMatricula"
              name="precioMaxMatricula"
              value={filtros.precioMaxMatricula}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* icfes */}
        <div className={styles.formGroup}>
          <label>ICFES:</label>
          <div className={styles.rangeGroup}>
            <input
              className={styles.formInput}
              type="number"
              placeholder="Mínimo"
              id="icfes"
              name="icfes"
              value={filtros.icfes}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* profesores */}
        <div className={styles.formGroup}>
          <label>Profesores:</label>
          <div className={styles.rangeGroup}>
            <input
              className={styles.formInput}
              type="number"
              placeholder="Mín"
              id="cantidadProfesoresMin"
              name="cantidadProfesoresMin"
              value={filtros.cantidadProfesoresMin}
              onChange={handleChange}
            />
            <input
              className={styles.formInput}
              type="number"
              placeholder="Máx"
              id="cantidadProfesoresMax"
              name="cantidadProfesoresMax"
              value={filtros.cantidadProfesoresMax}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* salones */}
        <div className={styles.formGroup}>
          <label>Salones:</label>
          <div className={styles.rangeGroup}>
            <input
              className={styles.formInput}
              type="number"
              placeholder="Mín"
              id="cantidadSalonesMin"
              name="cantidadSalonesMin"
              value={filtros.cantidadSalonesMin}
              onChange={handleChange}
            />
            <input
              className={styles.formInput}
              type="number"
              placeholder="Máx"
              id="cantidadSalonesMax"
              name="cantidadSalonesMax"
              value={filtros.cantidadSalonesMax}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* grados */}
        <div className={styles.formGroup}>
          <label>Grados:</label>
          <div className={styles.rangeGroup}>
            <input
              className={styles.formInput}
              type="number"
              placeholder="Mín"
              id="cantidadGradosMin"
              name="cantidadGradosMin"
              value={filtros.cantidadGradosMin}
              onChange={handleChange}
            />
            <input
              className={styles.formInput}
              type="number"
              placeholder="Máx"
              id="cantidadGradosMax"
              name="cantidadGradosMax"
              value={filtros.cantidadGradosMax}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* alumnos */}
        <div className={styles.formGroup}>
          <label>Alumnos:</label>
          <div className={styles.rangeGroup}>
            <input
              className={styles.formInput}
              type="number"
              placeholder="Mín"
              id="cantidadAlumnosMin"
              name="cantidadAlumnosMin"
              value={filtros.cantidadAlumnosMin}
              onChange={handleChange}
            />
            <input
              className={styles.formInput}
              type="number"
              placeholder="Máx"
              id="cantidadAlumnosMax"
              name="cantidadAlumnosMax"
              value={filtros.cantidadAlumnosMax}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className={styles.button}>
          Aplicar Filtros
        </button>
      </form>
    </div>
  );
};

export default Filter;

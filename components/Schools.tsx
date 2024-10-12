import React, { useState } from 'react';
import styles from '@/styles/components/Schools.module.scss';

// Datos simulados de colegios
const colegiosSimulados = [
  {
    id: 1,
    nombre: 'Colegio ABC',
    tipoInstitucion: 'Privado',
    ubicacion: 'Bogotá',
    precioMensual: 500000,
    icfes: 'Superior',
  },
  {
    id: 2,
    nombre: 'Colegio XYZ',
    tipoInstitucion: 'Público',
    ubicacion: 'Medellín',
    precioMensual: 0,
    icfes: 'Alto',
  },
  {
    id: 3,
    nombre: 'Colegio DEF',
    tipoInstitucion: 'Privado',
    ubicacion: 'Cali',
    precioMensual: 400000,
    icfes: 'Medio',
  },
];

const Schools: React.FC = () => {
  const [filtros, setFiltros] = useState({
    nombre: '',
    tipoInstitucion: '',
    ubicacion: '',
    precioMin: '',
    precioMax: '',
    icfes: '',
  });

  const [colegiosFiltrados, setColegiosFiltrados] = useState(colegiosSimulados);

  // Maneja el cambio de los filtros
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value,
    });
  };

  // Filtra los colegios de acuerdo a los criterios
  const handleFiltrar = () => {
    const colegiosFiltrados = colegiosSimulados.filter(colegio => {
      const cumpleNombre = filtros.nombre === '' || colegio.nombre.toLowerCase().includes(filtros.nombre.toLowerCase());
      const cumpleTipo = filtros.tipoInstitucion === '' || colegio.tipoInstitucion === filtros.tipoInstitucion;
      const cumpleUbicacion = filtros.ubicacion === '' || colegio.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase());
      const cumplePrecio = 
        (filtros.precioMin === '' || colegio.precioMensual >= parseInt(filtros.precioMin)) &&
        (filtros.precioMax === '' || colegio.precioMensual <= parseInt(filtros.precioMax));
      const cumpleIcfes = filtros.icfes === '' || colegio.icfes === filtros.icfes;

      return cumpleNombre && cumpleTipo && cumpleUbicacion && cumplePrecio && cumpleIcfes;
    });

    setColegiosFiltrados(colegiosFiltrados);
  };

  return (
    <div className={styles.schoolsContainer}>
      <ul className={styles.schoolsList}>
        {colegiosFiltrados.map(colegio => (
          <li key={colegio.id} className={styles.schoolItem}>
            <a href={`/perfil-colegio/${colegio.id}`} className={styles.schoolLink}>
              <h3 className={styles.schoolName}>{colegio.nombre}</h3>
              <p>Tipo: {colegio.tipoInstitucion}</p>
              <p>Ubicación: {colegio.ubicacion}</p>
              <p>Precio Mensual: {colegio.precioMensual}</p>
              <p>ICFES: {colegio.icfes}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schools;

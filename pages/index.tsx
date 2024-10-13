import { useState } from 'react';
import Filter from "@/components/Filter";
import Schools from "@/components/Schools";
import styles from "@/styles/pages/Home.module.scss";
import ButtonLink from "@/components/ButtonLink";
import { IFilter } from "@/interfaces/IFilter.interface";
import { ISchool } from "@/interfaces/ISchool.interface"; // Asegúrate de tener esta interfaz definida

const initialFilters: IFilter = {
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
};

// Función para convertir los filtros en query params
const buildQueryParams = (filtros: IFilter) => {
  const params = new URLSearchParams();

  Object.keys(filtros).forEach((key) => {
    const value = (filtros as any)[key];
    if (value !== "" && value !== 0) {
      params.append(key, value.toString());
    }
  });

  return params.toString();
};

export default function Home() {
  const [filteredSchools, setFilteredSchools] = useState<ISchool[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSchools = async (filtros: IFilter) => {
    try {
      setError(null);
      const queryParams = buildQueryParams(filtros);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/school/filter/filtro?${queryParams}`;
      console.log("URL de la solicitud:", url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error al obtener los colegios: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Colegios filtrados:", data);
      setFilteredSchools(data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Hubo un problema al obtener los colegios. Por favor, intenta de nuevo más tarde.");
      setFilteredSchools([]);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filterContainer}>
        <Filter initialFilters={initialFilters} onSubmit={fetchSchools} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.buttonProfile}>
          <ButtonLink url="/register" label="Registro" />
          <ButtonLink url="/profile" label="Perfil" />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <Schools schools={filteredSchools} />
      </div>
    </div>
  );
}
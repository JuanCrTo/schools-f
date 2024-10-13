import Filter from "@/components/Filter";
import Schools from "@/components/Schools";
import styles from "@/styles/pages/Home.module.scss";
import ButtonLink from "@/components/ButtonLink";
import { IFilter } from "@/interfaces/IFilter.interface";

const fetchSchools = async (filtros: IFilter) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/school`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filtros),
    });

    if (!response.ok) {
      throw new Error('Error al obtener los colegios');
    }

    const data = await response.json();
    console.log("Colegios filtrados:", data);
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

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

// index.tsx
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.filterContainer}> {/* Nueva clase aquí */}
        <Filter initialFilters={initialFilters} onSubmit={fetchSchools} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.buttonProfile}>
          <ButtonLink url="/register" label="Registro" />
          <ButtonLink url="/profile" label="Perfil" />
        </div>
        <Schools />
      </div>
    </div>
  );
}

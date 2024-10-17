import { useEffect, useState } from "react";
import Filter from "@/components/Filter";
import Schools from "@/components/Schools";
import styles from "@/styles/pages/Home.module.scss";
import ButtonLink from "@/components/ButtonLink";
import { IFilter } from "@/interfaces/IFilter.interface";
import { ISchool } from "@/interfaces/ISchool.interface";
import { useUserContext } from "@/components/UserContext";
import { useRouter } from "next/router";

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

const buildQueryParams = (filtros: IFilter) => {
  const params = new URLSearchParams();

  Object.entries(filtros).forEach(([key, value]) => {
    if (value !== "" && value !== 0) {
      params.append(key, value.toString());
    }
  });

  return params.toString();
};

export default function Home() {
  const router = useRouter();
  const { userId, clearUser, isLoading, refreshUser } = useUserContext();
  const [filteredSchools, setFilteredSchools] = useState<ISchool[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  useEffect(() => {
    if (!isLoading) {
      console.log("userId:", userId);
    }
  }, [userId, isLoading]);

  const fetchSchools = async (filtros: IFilter) => {
    try {
      setError(null);
      const queryParams = buildQueryParams(filtros);
      const url = `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school/filter/filtro?${queryParams}`;
      console.log("URL de la solicitud:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Error al obtener los colegios: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("Colegios filtrados:", data);
      setFilteredSchools(data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError(
        "Hubo un problema al obtener los colegios. Por favor, intenta de nuevo más tarde."
      );
      setFilteredSchools([]);
    }
  };

  const handleLogout = () => {
    clearUser();
    router.push("/");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.filterContainer}>
        <Filter initialFilters={initialFilters} onSubmit={fetchSchools} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.buttonProfile}>
          {userId ? (
            <>
              <ButtonLink
                url="/"
                label="Cerrar Sesión"
                onClick={handleLogout}
              />
              <ButtonLink url="/profile" label="Perfil" />
            </>
          ) : (
            <>
              <ButtonLink url="/signup" label="Registro" />
              <ButtonLink url="/login" label="Iniciar Sesión" />
              {/* <ButtonLink url={profileUrl} label="Perfil" /> */}
            </>
          )}
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <Schools schools={filteredSchools} />
      </div>
    </div>
  );
}

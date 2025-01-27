import { useEffect, useState } from "react";
import Filter from "@/components/Filter";
import Schools from "@/components/Schools";
import styles from "@/styles/pages/Home.module.scss";
import ButtonLink from "@/components/ButtonLink";
import {
  Genero,
  Iprops,
  TipoInstitucion,
} from "@/components/Filter/Props.interface";
import { IProps } from "@/components/Schools/Props.interface";
import { useUserContext } from "@/providers/UserContext";
import { useRouter } from "next/router";
// import ChatComponent from "@/components/Chat";

const initialFilters: Iprops = {
  nombre: "",
  tipoInstitucion: "" as unknown as TipoInstitucion,
  precioMinMensual: 0,
  precioMaxMensual: 0,
  precioMinMatricula: 0,
  precioMaxMatricula: 0,
  icfes: 0,
  cantidadProfesoresMin: 0,
  cantidadProfesoresMax: 0,
  cantidadSalonesMin: 0,
  cantidadSalonesMax: 0,
  cantidadGradosMin: 0,
  cantidadGradosMax: 0,
  genero: "" as unknown as Genero,
  cantidadAlumnosMin: 0,
  cantidadAlumnosMax: 0,
};

const buildQueryParams = (filtros: Iprops) => {
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
  const [filteredSchools, setFilteredSchools] = useState<IProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  useEffect(() => {
    if (!isLoading) {
    }
  }, [userId, isLoading]);

  useEffect(() => {
    fetchSchools(initialFilters);
  }, []);

  const fetchSchools = async (filtros: Iprops) => {
    try {
      setError(null);
      const queryParams = buildQueryParams(filtros);
      const url = `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school/filter/filtro?${queryParams}`;

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
            </>
          )}
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <Schools schools={filteredSchools} />
      </div>
      <div className={styles.filterContainer}>
        <Filter initialFilters={initialFilters} onSubmit={fetchSchools} />
      </div>

      {/* {userId && <ChatComponent userId={userId} />} */}
    </div>
  );
}

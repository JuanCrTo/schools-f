import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/components/SchoolProfile.module.scss";
import { ISchool } from "@/interfaces/ISchool.interface";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
} from "react-icons/fa";

const SchoolDetails: React.FC = () => {
  const router = useRouter();
  const [school, setSchool] = useState<ISchool | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const fetchSchoolDetails = async () => {
      if (!router.isReady) return;

      const { id } = router.query;

      if (!id || Array.isArray(id)) {
        setError("ID de colegio no válido");
        setLoading(false);
        return;
      }

      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school/profile/details/${id}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSchool(data);
      } catch (error) {
        setError("Error al cargar los detalles del colegio");
      } finally {
        setLoading(false);
      }
    };

    fetchSchoolDetails();
  }, [router.isReady, router.query]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateSchool = async (updatedSchool: ISchool) => {
    if (!school) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school/${school._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedSchool),
        }
      );

      if (!response.ok) {
        throw new Error(`Error al actualizar: ${response.status}`);
      }

      const updatedData = await response.json();
      setSchool(updatedData);
      setIsEditing(false);
    } catch (error) {
      setError("Error al actualizar los detalles del colegio");
    }
  };

  if (loading) {
    return <div className={styles.loading}>Cargando los detalles del colegio...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!school) {
    return <div className={styles.error}>No se encontraron detalles del colegio.</div>;
  }

  return (
    <div className={styles.schoolProfile}>
      <h2 className={styles.schoolName}>{school.nombre}</h2>

      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateSchool(school);
          }}
        >
          <textarea
            value={school.descripcion}
            onChange={(e) => setSchool({ ...school, descripcion: e.target.value })}
          />
          <button type="submit">Actualizar</button>
          <button type="button" onClick={handleEditToggle}>Cancelar</button>
        </form>
      ) : (
        <>
          <p>
            <strong>Descripción:</strong> {school.descripcion}
          </p>

          <div className={styles.profileDetails}>
            <div className={styles.profileSection}>
              <h3>Información Básica</h3>
              <p>
                <FaPhone /> <strong>Teléfono:</strong> {school.telefono}
              </p>
              <p>
                <FaMapMarkerAlt /> <strong>Ubicación:</strong> {school.ubicacion}
              </p>
              <p>
                <strong>Tipo de Institución:</strong> {school.tipoInstitucion}
              </p>
              <p>
                <strong>Género:</strong> {school.genero}
              </p>
            </div>

            <div className={styles.profileSection}>
              <h3>Estadísticas</h3>
              <p>
                <FaUserGraduate /> <strong>Número de Estudiantes:</strong> {school.numEstudiantes}
              </p>
              <p>
                <FaChalkboardTeacher /> <strong>Número de Profesores:</strong> {school.numProfesores}
              </p>
            </div>

            <div className={styles.profileSection}>
              <h3>Servicios y Costos</h3>
              <p>
                <FaBookOpen /> <strong>Servicios:</strong>
              </p>
              <p>{school.servicios}</p> <br />
              <p>
                <strong>Precio Mínimo Mensual:</strong> ${school.precioMinMensual}
              </p>
              <p>
                <strong>Precio Máximo Mensual:</strong> ${school.precioMaxMensual}
              </p>
              <p>
                <strong>Precio Mínimo Matrícula:</strong> ${school.precioMinMatricula}
              </p>
              <p>
                <strong>Precio Máximo Matrícula:</strong> ${school.precioMaxMatricula}
              </p>
            </div>

            <div className={styles.profileSection}>
              <h3>Rendimiento Académico</h3>
              <p>
                <strong>ICFES Mínimo:</strong> {school.icfesMinimo}
              </p>
            </div>

            <div className={styles.profileSection}>
              <h3>Infraestructura</h3>
              <p>
                <strong>Cantidad de Profesores Mínima:</strong> {school.cantidadProfesoresMin}
              </p>
              <p>
                <strong>Cantidad de Salones Mínima:</strong> {school.cantidadSalonesMin}
              </p>
              <p>
                <strong>Cantidad de Grados Mínima:</strong> {school.cantidadGradosMin}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SchoolDetails;

import React, { useEffect, useState } from "react";
import { IStudentProfile } from "@/interfaces/IProfile.interface";
import StudentProfile from "@/components/StudentProfile";
import styles from "@/styles/pages/Home.module.scss";

const fetchStudentProfile = async (studentId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/student/${studentId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener la información del estudiante");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return null; // Devolver null en caso de error
  }
};

const StudentProfilePage: React.FC<{ studentId: string }> = ({ studentId }) => {
  const [student, setStudent] = useState<IStudentProfile | null>(null);

  useEffect(() => {
    const getStudentProfile = async () => {
      const studentData = await fetchStudentProfile(studentId);
      setStudent(studentData);
    };

    getStudentProfile();
  }, [studentId]);

  if (!student) {
    return <div>Cargando perfil del estudiante...</div>; // Mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className={styles.studentProfileContainer}>
      <StudentProfile student={student} />
    </div>
  );
};

// Aquí debes pasar el studentId correspondiente al perfil del estudiante que deseas mostrar.
// Puedes obtener este ID de las props, de la URL, o del estado global, dependiendo de tu implementación.
export default function Home() {
  const studentId = "67890"; // Reemplaza con el ID real del estudiante

  return (
    <StudentProfilePage studentId={studentId} />
  );
}
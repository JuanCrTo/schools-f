// StudentProfile.tsx
import React from "react";
import { IStudentProfile } from "@/interfaces/IProfile.interface";

interface StudentProfileProps {
  student: IStudentProfile;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <div className="student-profile">
      <h2>{student.nombre}</h2>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {student.telefono}
      </p>
      {/* Agrega más campos según sea necesario */}
    </div>
  );
};

export default StudentProfile;

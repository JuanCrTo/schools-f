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
        <strong>Teléfono:</strong> {student.telefono}
      </p>
    </div>
  );
};

export default StudentProfile;

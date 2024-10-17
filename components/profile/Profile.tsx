import React, { useEffect, useState } from "react";
import { useUserContext } from "@/components/UserContext";
import StudentProfile from "./StudentProfile";
import SchoolProfile from "./SchoolProfile";
import {
  IStudentProfile,
  ISchoolProfile,
} from "@/interfaces/IProfile.interface";
import { useRouter } from "next/router";

const Profile: React.FC = () => {
  const router = useRouter();
  const { userId, tipoUsuario } = useUserContext();
  const [profileData, setProfileData] = useState<
    IStudentProfile | ISchoolProfile | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId && tipoUsuario) {
      fetchProfile();
    }
  }, [userId, tipoUsuario]);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school/profile/${userId}`
      );
      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        console.error("Error fetching profile:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedProfile: ISchoolProfile | IStudentProfile) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school/${userId}`, // Ajusta la URL según tu API
        {
          method: "PUT", // O "PATCH" según cómo manejes las actualizaciones
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProfile),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();
        setProfileData(updatedData); // Actualiza el estado con los nuevos datos
      } else {
        console.error("Error updating profile:", response.statusText);
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  if (loading) {
    return <div>Cargando perfil...</div>;
  }

  if (!userId || !tipoUsuario) {
    return <div>Inicia sesión para ver tu perfil.</div>;
  }

  return (
    <div>
      {tipoUsuario === "Colegio" ? (
        <SchoolProfile school={profileData as ISchoolProfile} onSave={handleSave}/>
      ) : (
        <StudentProfile student={profileData as IStudentProfile} />
      )}
    </div>
  );
};

export default Profile;

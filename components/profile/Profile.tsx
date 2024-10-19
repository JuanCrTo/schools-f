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
      const apiUrl =
        tipoUsuario === "Colegio"
          ? `${process.env.NEXT_PUBLIC_API_URL}/school/profile/${userId}`
          : `${process.env.NEXT_PUBLIC_API_URL}/student/profile/${userId}`;

      const response = await fetch(apiUrl);

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

  const handleSave = async (
    updatedProfile: ISchoolProfile | IStudentProfile
  ) => {
    try {
      const apiUrl =
        tipoUsuario === "Colegio"
          ? `${process.env.NEXT_PUBLIC_API_URL}/school/${userId}`
          : `${process.env.NEXT_PUBLIC_API_URL}/student/${userId}`; // Cambia la URL según el tipo de usuario

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setProfileData(updatedData);
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
        <SchoolProfile
          school={profileData as ISchoolProfile}
          onSave={handleSave}
        />
      ) : (
        <StudentProfile
          student={profileData as IStudentProfile}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Profile;

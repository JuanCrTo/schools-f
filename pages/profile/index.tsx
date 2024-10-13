import ProfilePage from "@/components/UserProfile";

const Profile: React.FC = () => {
  return (
    <>
      <ProfilePage userType="school" profileData={schoolProfileData} />
    </>
  );
};

export default Profile;

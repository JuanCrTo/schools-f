import ButtonLink from "@/components/ButtonLink";
import UserProfile from "@/components/profile/Profile";
import { UserProvider } from "@/components/UserContext";

const register: React.FC = () => {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <ButtonLink url="/" label="Principal" />
      </UserProvider>
    </>
  );
};

export default register;

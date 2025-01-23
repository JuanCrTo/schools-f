import ButtonLink from "@/components/ButtonLink";
import UserProfile from "@/components/Profile/Profile";
import { UserProvider } from "@/providers/UserContext";

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

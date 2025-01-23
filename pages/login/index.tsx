import Login from "@/components/Login";
import ButtonLink from "@/components/ButtonLink";
import { UserProvider } from "@/providers/UserContext";

const login: React.FC = () => {
  return (
    <>
      <ButtonLink url="/signup" label="Registro" />
      <ButtonLink url="/" label="Principal" />
      <UserProvider>
        <Login />
      </UserProvider>
    </>
  );
};

export default login;

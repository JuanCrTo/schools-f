import Login from "@/components/Form/Login";
import ButtonLink from "@/components/ButtonLink";
import { UserProvider } from "@/components/UserContext";

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

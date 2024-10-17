import Login from "@/components/Form/Login";
import ButtonLink from "@/components/ButtonLink";
import { UserProvider } from "@/components/UserContext";

const login: React.FC = () => {
  return (
    <>
      <UserProvider>
        <Login />
      </UserProvider>
      <ButtonLink url="/signup" label="Registro" />
      <ButtonLink url="/" label="Principal" />
    </>
  );
};

export default login;

import Login from "@/components/Login";
import ButtonLink from "@/components/ButtonLink";

const register: React.FC = () => {
  return (
    <>
      <Login />
      <ButtonLink url="/profile" label="Registro" />
    </>
  );
};

export default register;

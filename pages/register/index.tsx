import RegisterForm from "@/components/RegisterForm";
import ButtonLink from "@/components/ButtonLink";

const register: React.FC = () => {
  return (
    <>
      <RegisterForm />
      <ButtonLink url="/login" label="Login" />
    </>
  );
};

export default register;

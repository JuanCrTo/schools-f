import RegisterForm from "@/components/Form/RegisterForm";
import ButtonLink from "@/components/ButtonLink";

const register: React.FC = () => {
  return (
    <>
      <RegisterForm />
      <ButtonLink url="/login" label="Login" />
      <ButtonLink url="/" label="Principal" />
    </>
  );
};

export default register;

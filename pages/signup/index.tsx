import RegisterForm from "@/components/Form/RegisterForm";
import ButtonLink from "@/components/ButtonLink";

const register: React.FC = () => {
  return (
    <>
      <ButtonLink url="/login" label="Login" />
      <ButtonLink url="/" label="Principal" />
      <RegisterForm />
    </>
  );
};

export default register;

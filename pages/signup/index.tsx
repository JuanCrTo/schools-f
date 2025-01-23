import RegisterForm from "@/components/Register";
import ButtonLink from "@/components/ButtonLink";

const Register: React.FC = () => {
  return (
    <>
      <ButtonLink url="/login" label="Login" />
      <ButtonLink url="/" label="Principal" />
      <RegisterForm />
    </>
  );
};

export default Register;

import "./signIn.css";
import { SignIn } from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div className="SignIn">
      <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignIn;

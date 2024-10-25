import { useAuth } from "@clerk/clerk-react";
import "./dasboardLayout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DasboardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="dasboardLayout">
      <div className="menu"></div>
      <div className="contact"></div>
    </div>
  );
};

export default DasboardLayout;

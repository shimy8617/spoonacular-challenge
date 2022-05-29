import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <div>Menú</div>
      <div>{localStorage.getItem("userName")}</div>
      <div onClick={handleLogout}>x</div>
    </header>
  );
};

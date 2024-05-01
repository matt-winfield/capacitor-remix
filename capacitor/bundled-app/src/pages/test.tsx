import { useNavigate } from "react-router-dom";

export const TestPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Bundled Test Page</h1>
      <button onClick={goToHomePage}>Go to bundled home page</button>
    </div>
  );
};

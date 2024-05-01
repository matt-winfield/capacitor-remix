import { Capacitor } from "@capacitor/core";
import { useNavigate } from "react-router-dom";
import { config } from "../config";

export const HomePage = () => {
  const navigate = useNavigate();
  const platform = Capacitor.getPlatform();

  const goToRemix = () => {
    window.location.href = config.webUrl;
  };

  const goToTestPage = () => {
    navigate("/test-page");
  };

  return (
    <div>
      <h1>Bundled Home</h1>
      <button onClick={goToRemix}>Navigate to Remix (external URL)</button>
      <button onClick={goToTestPage}>Go to bundled test page</button>
      <p>Platform: {platform}</p>
    </div>
  );
};

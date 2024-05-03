import { Capacitor } from "@capacitor/core";
import { useNavigate } from "react-router-dom";
import { config } from "../config";
import { useEffect } from "react";

export const HomePage = () => {
  const navigate = useNavigate();
  const platform = Capacitor.getPlatform();

  useEffect(() => {
    // Get the current time in milliseconds
    const currentTime = new Date().getTime();
    console.log("[PERFORMANCE] Bundled Home Page Loaded at: ", currentTime);
  }, []);

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

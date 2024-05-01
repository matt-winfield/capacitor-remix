import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { Capacitor } from "@capacitor/core";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  const goToBundledHome = () => {
    window.location.href = "http://localhost/";
  };

  const goToBundledPage = () => {
    window.location.href = "http://localhost/test-page";
  };

  const goToRemixTestPage = () => {
    navigate("/test");
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix Home</h1>
      <button onClick={goToRemixTestPage}>Go to Remix test page</button>
      {Capacitor.isNativePlatform() && (
        <>
          <button onClick={goToBundledHome}>Go to bundled home</button>
          <button onClick={goToBundledPage}>Go to bundled test page</button>
        </>
      )}
      <div>Platform: {Capacitor.getPlatform()}</div>
    </div>
  );
}

import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capacitor.remix.app",
  appName: "Capacitor Remix",
  webDir: "capacitor/bundled-app/dist",
  server: {
    cleartext: true,
    allowNavigation: ["*"],
  },
};

export default config;

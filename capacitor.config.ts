import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capacitor.remix.app",
  appName: "Capacitor Remix",
  webDir: "capacitor/bundled-app/dist",
  server: {
    // url: "http://10.0.2.2:3000",
    cleartext: true,
    allowNavigation: ["*"],
  },
};

export default config;

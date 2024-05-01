# Capacitor + Remix example

This is an example of how to use [Remix](https://remix.run) with [Capacitor](https://capacitorjs.com/).

It includes a Vite React app which is bundled with the Capacitor installation for offline functionality.

This offline app can redirect to the Remix app, both of which can use Capacitor plugins.

## Running

`pnpm install`

Build the native dependencies:

`pnpm build:native`

Run the remix server:

`pnpm dev`

Run the native app:

`npx cap run android` or `npx cap run ios`, or open and run the `android`/`ios` project in Android Studio or Xcode.

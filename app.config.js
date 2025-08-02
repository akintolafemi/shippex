export const expo = {
  name: 'Shippex',
  displayName: "Shippex",
  owner: "am.oluwafemi",
  slug: "shippex",
  version: "0.0.1",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  scheme: "shippex",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./src/assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#FFFFFF"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.makintola.shippex",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: "com.makintola.shippex",
  },
  extra: {
    eas: {
    },
  },
  plugins: [
    "expo-font",
  ],
  hooks: {
  },
  experiments: {
    typedRoutes: true
  }
};

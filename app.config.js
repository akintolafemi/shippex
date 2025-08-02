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
      projectId: "a5d0f5f5-137f-4fde-92c5-79a8a9fe97ba"
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

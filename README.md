# Uber: UI Clone with Expo

[![follow @calebnance](https://img.shields.io/twitter/follow/calebnance.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/calebnance)

## Features

- Expo SDK 44
- iOS and Android
- React Navigation v6
- PropTypes

<p align="center">
  <img src="screenshots/screenshare-3.png?raw=true" />
</p>

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

Install: `yarn` or `yarn install`

Run Project Locally: `yarn dev` or `yarn start`

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

**Update Linting Packages:**

```
yarn add @babel/core eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native prettier --dev
```

## Release Notes

- upgraded to [Expo SDK 44](https://blog.expo.dev/expo-sdk-44-4c4b8306584a)
- upgraded to [Expo SDK 43](https://blog.expo.dev/expo-sdk-43-aa9b3c7d5541)
- upgraded to [React Navigation v6](https://reactnavigation.org/docs/getting-started)
- upgraded to [React Navigation v5](https://reactnavigation.org/docs/5.x/getting-started)
- upgraded to [Expo SDK 42](https://blog.expo.io/expo-sdk-42-579aee2348b6)
- upgraded to [Expo SDK 41](https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
- upgraded to [Expo SDK 40](https://blog.expo.io/expo-sdk-40-is-now-available-d4d73e67da33)
- upgraded to [Expo SDK 39](https://dev.to/expo/expo-sdk-39-is-now-available-1lm8)
- upgraded to [Expo SDK 38](https://blog.expo.io/expo-sdk-38-is-now-available-ab6cd30ca2ee)
- upgraded to [Expo SDK 37](https://blog.expo.io/expo-sdk-37-is-now-available-dd5770f066a6)
- upgraded to [Expo SDK 36](https://blog.expo.io/expo-sdk-36-is-now-available-b91897b437fe)
- upgraded to [React Navigation v4](https://reactnavigation.org/docs/4.x/getting-started)
- upgraded to [Expo SDK 35](https://blog.expo.io/expo-sdk-35-is-now-available-beee0dfafbf4)
- upgraded to [Expo SDK 34](https://blog.expo.io/expo-sdk-34-is-now-available-4f7825239319)
- upgraded to [Expo SDK 33](https://blog.expo.io/expo-sdk-v33-0-0-is-now-available-52d1c99dfe4c)
- [MapView](https://docs.expo.io/versions/latest/sdk/map-view/) with user's current location ([Expo Location](https://docs.expo.io/versions/v32.0.0/sdk/location/))
- Select Ride Type Modal (Car or Bike & Scooter)
- [Drawer](https://reactnavigation.org/docs/en/drawer-navigator.html) Example with React Navigation

<p align="left">
  <img src="screenshots/screenshot-v0.0.1.jpg?raw=true" width="360" />
</p>

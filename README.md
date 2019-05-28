# Uber Clone with Expo

<p align="center">
  <img src="screenshots/screenshare-3.png?raw=true" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Stats](#stats)
- [Linting](#linting)
- [Demo & Release Notes](#release-notes)

## Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

## Stats

- Expo SDK 32
- React Navigation v3
- PropTypes

## Linting

- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Release Notes

### version 0.0.1 (current)

- [MapView](https://docs.expo.io/versions/latest/sdk/map-view/) with user's current location ([Expo Location](https://docs.expo.io/versions/v32.0.0/sdk/location/))
- Select Ride Type Modal (Car or Bike & Scooter)
- [Drawer](https://reactnavigation.org/docs/en/drawer-navigator.html) Example with React Navigation

<p align="left">
  <img src="screenshots/screenshot-v0.0.1.jpg?raw=true" width="360" />
</p>

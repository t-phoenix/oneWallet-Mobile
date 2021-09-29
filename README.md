# oneWallet-Mobile
React-Native Application for Harmony One Wallet (iOS and android)

---

### Introduction 
- This is a User Interface for oneWallet Mobile Application (iOS and android) developed in React-Native.
- Inspired from [oneWallet.crazy.one](oneWallet.crazy.one) and neumorphism, this UI is developed to easily help users get acquainted by the mobile application.
- To align the idea of keyless signIn Google Authenticator, I've made the createWallet layout according to manual setup, instead of qr scan.
- Dynamicity in the UI is provided according to next development phase needs. (Eg. Number of Wallet Cards on Main Screen, List of different tokens inside wallet).
- 
- The biggest developer community advantage from javascript will help take this project further easily.

---

### Code Documentation
- index.js Entry File, directs towars App.js
- App.js:  Drawer Navigatior Setup to Toggle the main features of App, and usefull external links
- src: for now this folder contains the source code for the other navigations, screens, styling, components and more. It would be preferred to write the further code for Web3 Api and other screeens in this folder as subfolder or files.
  - assets: contains the svg, jpeg, png, etc. files for use in App.
  - components: Currently holds only CustomSideBar for customised Drawer Options.
  - navigation: Navigators for each of the Drawer Options to navigate in different screens among them.
  - screens: Contains the files for screens that are been handled by navigation/navigator files. These are the layout of screen that renders on the screen
  - colors.js: contain some major color codes used across the Project
  - commonStyles.js: contains some common layout and styling for react-native components.

---

### Screenshots
![Main Screen](images/MainScreen.png)

![Wallet Screen](images/Wallet.png)

![Drawer Screen](images/Drawer.png)


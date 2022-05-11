<h1 align = "center"> Feedback Widget

<p align="center"> 
    <a href="#eyes-preview">Preview</a>          -
    <a href="#rocket-technology">Technology</a>          -
    <a href="#hammer-run-this-project">Installation</a>
</p>

### Feedback Widget is a component fixed in the right bottom corner of the website, used to send feedback via email.

## 👀 Preview

![screenshot1](https://i.imgur.com/J0o6RZN.png)
![screenshot2](https://i.imgur.com/jVCC3KM.png)

### [Live](https://feedback-widget-nlw-ten.vercel.app)

## :rocket: Technology
- Web:
  - [React](https://beta.reactjs.org) with [Vite](https://vitejs.dev) and [TypeScript](https://www.typescriptlang.org/docs/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [HeadlessUI](https://headlessui.dev)
  - [Axios](https://axios-http.com/ptbr/docs/intro)
  - [Phosphor Icons](https://phosphoricons.com)
  - [html2canvas](https://html2canvas.hertzen.com)
  - Deploy in [Vercel](https://vercel.com/)
- Mobile:
  - [React Native](https://reactnative.dev) with [TypeScript](https://www.typescriptlang.org/docs/)
  - [Axios](https://axios-http.com/ptbr/docs/intro)
  - [Expo](https://expo.dev)
  - [Phosphor Icons for React Native](https://www.npmjs.com/package/phosphor-react-native)
  - [RN Bottom Sheet made by Gorhom](https://github.com/gorhom/react-native-bottom-sheet)
- Server (back-end):
  - [Node.js Typescript](https://nodejs.dev/learn/nodejs-with-typescript) with [Express.js](https://expressjs.com/)
  - [Jest](https://jestjs.io/)
  - [Prisma](https://www.prisma.io)
  - [Nodemailer](https://nodemailer.com/about/)
  - Deploy in [Railway](https://railway.app)


## :hammer: Run this project
```bash 
# Clone this repository
$ git clone https://github.com/Linsmar7/feedback-widget-nlw.git
# Open the web project folder
$ cd feedback-widget-nlw\web
# Install dependencies (you need [Node.js](https://nodejs.org/en/) installed)
$ npm install
# Run npm run dev to start
$ npm run dev
# The page will open on localhost on the port assigned in your terminal

# Now to make the back-end work
# Open the server folder
$ cd ..\server
# Install dependencies (you need [Node.js](https://nodejs.org/en/) installed)
$ npm install
# Create a file named ".env"
$ touch .env
# Type this in the file and save:
$ DATABASE_URL="file:./dev.db"
# If you don't have postgresql and don't want to use it, go to prisma folder, then open the file named "schema.prisma" change the provider to "sqlite"
# Now re-establish the link between schema.prisma and .env file
$ npx prisma generate
# Run npm run dev to start
$ npm run dev
# In another terminal, run Prisma Studio to see the database
$ npx prisma studio
# Now with both front-end and back-end running, you can see the emails by changing the transport in the file named "nodemailerMailAdapter.ts" in the adapters folder
# Use [mailtrap](https://mailtrap.io), go to your inbox, in the right side you can choose the Integration in a select input, choose "nodemailer"
# Copy your new transport and change it in the nodemailerMailAdapter file
# Maybe you will need to stop the server and run again ;)
# Now test the app, if you need some help, [contact me!](https://www.linsmarvital.com/)

# For mobile, you have to use [EXPO](https://expo.dev) and your device or an emulator (of course, don't forget the npm install)
# With EXPO 45, some stuff has changed, no more expo-app-loading, you now have to use expo-splash-screen
$ expo install expo-splash-screen
# react-native-gesture-handler nees to be on the 2.1.0 version
$ npm install react-native-gesture-handler@~2.1.0
# You will probably do fine in starting the mobile.
# But if you didn't succeed and after many google searches and try and error you didn't succeed, DON'T BE SHY, [contact me!](https://www.linsmarvital.com/) ;)
```

---
Made with ❤️ by [Linsmar7](https://github.com/Linsmar7)🎇

<p align="center"><img src="https://i.imgur.com/pNVR8bn.png" width="400"></p>

<p align="center">  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">  </p>


# Vite+Tailwind+i18n Boilerplate
Welcome to the Vite+Tailwind+i18n boilerplate! 🚀

This project provides you with a solid foundation to kickstart your web development journey using three powerful technologies: Vite, Tailwind CSS, and i18n. Whether you're building a personal blog, a portfolio website, or a complex web application, this boilerplate has got you covered.

Please visit my [Linkedin](https://www.linkedin.com/in/arenadaiana/) to say thanks 	:grin: remember it helps me a lot ♥

## Features at a Glance
### Rapid Development with Vite
The Vite build tool revolutionizes your development process with its lightning-fast speeds, thanks to native ES module imports. Say goodbye to slow builds and hello to instantaneous development and hot module replacement.

### Stylish UI with Tailwind CSS
Tailwind CSS provides a utility-first approach to styling, enabling you to craft visually appealing and responsive interfaces effortlessly. With a vast library of pre-built classes, you can design beautiful components and layouts in minutes.

### Multilingual Support with i18n
Internationalization is made simple with the i18n framework. Easily translate and localize your web applications, making them accessible to a global audience. Create a seamless user experience in multiple languages and regions.

## Before Installation - System Requirements

Make sure your development environment meets the following requirements:

 - Node.js 16.8 or later.
 - MacOS, Windows (including WSL), and Linux are supported.

**_Note:_** While the pages directory requires Node.js v14 or later, the app directory requires Node v16.8.0 or later.

## New features! Clone this repository from the template

Now you can create new repositories based on this project by clicking on the "Use this template" button at the top of this repository page or by [clicking here.](https://github.com/DaianaArena/reactjs-nextjs-tailwind-boilerplate/generate)

### How to clone this repository from the template:

1. Give your new repository a name and description.
2. Choose the owner for the new repository.
3. Click "Create repository from template".

### Once you have created your new repository from the template, you can clone it to your local machine using the following steps:

1. Copy the URL of your new repository.
2. Open your terminal or Git Bash.
3. Navigate to the directory where you want to clone the repository.
4. Run the following command: git clone <repository-url> (replace <repository-url> with the URL you copied in step 1).
5. Press enter and the repository will be cloned to your local machine.

**_That's it! You now have a local copy of the repository and can start working on it._**

## Getting Started

First, install all the  dependencies:

```bash
npm install
# or
yarn install
```


Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/App.jsx`. The page auto-updates as you edit the file.

## How to Add Languages
To add a new language to your project, follow these steps:

1. Navigate to the /src/locales folder in your project directory.

2. Create a new JSON file for your language, e.g., fr.json for French.

3. Open the newly created JSON file and define translations for each key. For example:

```
{
  "greeting": "Bonjour",
  "welcome": "Bienvenue sur notre site !"
}

```

4. Then, go to the /src/i18n.js file and import your JSON file.
5. Add your new lenguage to the list, as you can see in this picture:

<img src="https://i.imgur.com/qSHRPfC.png">

e.g. for French:

```
import fr from "./locales/fr.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  fr: {
    translation: fr,
  },
};

```

6. To add your new lenguage to the selector, I also build a component that you can find and edit in /src/Components/LenguageSelector , You have to create a new button with an onClick prop that run changeLanguage() function:

e.g. for french:

```
<button type="button" onClick={() => changeLanguage("es")}>
        Fr
 </button>
```


> [!IMPORTANT]  
> For i18n to work, the keys of all language json must be the same!

## How to Add i18n to new components

Easy peasy! I have created a template for that too ♥ Just copy this:

```
import React from 'react'
import "../../i18n";
import { useTranslation } from "react-i18next";

const ComponentTemplate = () => {

  const { t, i18n } = useTranslation();
  const textList = {
    test: t("test")
  }


  return (
    <h1>{textList.test}</h1>
  )
}

export default ComponentTemplate
```

> [!IMPORTANT]  
> REMEMBER YOU HAVE TO USE IT IN ANOTHER FILE! HOW?
> Import the new component:
> `import ComponentTemplate from "./Components/{yourComponent}";`
> Call it in your JSX:
> `<ComponentTemplate/>`

or you can use the Component Template I've included in your /src/Components folder ♥



## Project Architecture
The project follows a straightforward architecture:

* src folder: Contains your application source code.
    - assets: Store your static assets like images, fonts, etc.
    - components: Organize your Vue components.
    - locales: Manage your i18n translations here.


* styles: Customize your Tailwind CSS in tailwind.config.js file
* vite.config.js: Vite configuration file for customizing the build process.

## Learn More

### Vite

To learn more about Vite, you can check out [this documentation](https://vitejs.dev/guide/features.html)

### Tailwind

To learn about tailwind you can checkout [Tailwind documentation](https://tailwindcss.com/docs/installation).

### i18n

If you need to learn more about it don't forget to [visit their documentation](https://react.i18next.com/)


## Build
```bash
yarn build
# or `npm run build`
```

# License and Support

As a passionate Frontend Developer who truly values the open-source community, I'm thrilled to provide you with this project and grants you the freedom to use this boilerplate in both personal and commercial projects, encouraging a wide range of creative applications.

## How to Show Your Support
You can show your appreciation and support by ☕buying me a coffee☕. 

<p><a href="https://www.buymeacoffee.com/arenadaianadev"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="buy me a coffee" /></a></p>

Every coffee you buy is a small token of encouragement and helps me allocate more time and resources to this project. Your support is immensely valued and helps ensure the longevity and quality of this open-source endeavor.

Thank you for being a part of this community and for considering supporting my work. Together, we can continue to build and innovate in the world of web development.

## Contribute and Enhance
Your contributions are invaluable! If you have ideas for improvements or encounter issues, please don't hesitate to:

* [Create an Issue](https://github.com/DaianaArena/vite-tailwind-localization-template/issues/new/choose)
* [Submit a Pull Request](https://github.com/DaianaArena/vite-tailwind-localization-template/compare)

I greatly appreciate your support in making this project even better.


## Thank You!
Thank you for choosing the Vite+Tailwind+i18n Boilerplate. I hope it accelerates your web development journey and helps you build amazing projects. If you find it helpful, consider giving it a star ⭐️ on GitHub to show your support!

Happy coding! 🚀👨‍💻👩‍💻
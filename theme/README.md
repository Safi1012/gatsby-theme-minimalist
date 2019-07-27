## 👀 Gatsby Minimalist Theme

Welcome to my _Minimalist Gatsby Theme_ repository! A live demo of the theme can be found [here](https://filipesantoscorrea.com).

<br/>

## 💻 Installation

To use the Gatsby Minimalist Theme in your site, follow this instruction:

1.  Install Theme: 
    ```sh
    yarn add gatsby-theme-minimalist
    ```

2.  Add this theme to your ```gatsby-config.js``` file and adjust the options to fit your needs. <br/>
    You can find a detailed explanation about the options object further below.

    ```js
    module.exports = {
      plugins: [{
        resolve: "gatsby-theme-minimalist",

        options: {
          // SEO
          title: "Your site title",
          description: "Your site description",
          siteUrl: "https://your-future-site.com",
          appName: "Your pwa app name",

          // Content
          headline: "Your headline",
          subHeadline: "Your <strong>meaningful</strong> message.<br/>",
          socialList: [{
            icon: 'FaGithub', // a detailed explanation can be found in the options section
            url: 'https://github.com/your-profile',
            ariaLabel: 'Link to my GitHub profile',
          }]
        }
      }]
    }
    ```

3.  Start developing: 
    ```sh
    yarn develop
    ```

4.  Build production: 
    ```sh
    yarn build
    ```

<br/>

## ⚙️ Options

In order to provide a big selection of icons, this theme makes use of the fabulous _React Icons_ library. The _React Icons_ library comes with 9 different icon sets (_FontAwesome_, _Ionic_, _Material Design_, _Typicons_, _Github Octicons_, _Feather_, _Game_, _Weather_, and _Dev_). Just browse through the vast list of icons [https://react-icons.netlify.com](https://react-icons.netlify.com/#/icons/fa) and copy the icon name (e.g. `FaTwitter`) and paste it to your options in the `socialList[{icon: 'FaTwitter'}]` option section.

<br/>

## 👩‍💻 Contributing

Just submit an issue, be it a bug report or a feature request. I'm always happy to accept new pull requests.

<br/>

## 🙌 Credits

Special thanks to [@JCofman](https://github.com/JCofman) for the idea and recommendation to use _React Icons_ in this theme!

import "../styles/globals.css";
import Prismic from "@prismicio/client";
import {Client} from "../prismic-configuration";

// export default class MyApp extends NextApp {
//   static async getInitialProps(appCtx) {
//     const client = Client();
//     const menu = (await client.getSingle("menu")) || {};
//     return {
//       props: {
//         menu: menu
//       }
//     }
//   }
// }

export default function App({ Component, pageProps, props }) {
  //pageProps.slices[0].pages=pageProps.pages;
  return <Component {...pageProps} menu={props.menu} />;
};

App.getInitialProps = async() => {
  const client = Client();
  const menu = (await client.getSingle("menu")) || {};

  return { 
    props: {
      menu: menu,
    },
  };
};



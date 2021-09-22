import "../styles/globals.css";
import NextApp from 'next/app';
import {Client} from "../prismic-configuration";
import { useGetStaticProps } from "next-slicezone/hooks";
import { props } from "bluebird";

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
  return <Component {...pageProps} menu={props.menu} />;
};

App.getInitialProps = async(context) => {
  const client = Client();
  const menu = (await client.getSingle("menu")) || {};

  return { 
    props: {
      menu: menu
    },
  };
};



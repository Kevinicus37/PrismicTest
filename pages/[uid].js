import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import Prismic from "@prismicio/client";

import resolver from "../sm-resolver.js";
import Layout from "./../components/Layout";

const Page = (props) => {
  return (
  <Layout menu={props.menu}>
    <SliceZone {...props.data}  resolver={resolver} />;
  </Layout>)
};

// Fetch content from prismic
// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   queryType: 'repeat',
//   type: 'page',
//   apiParams({ params }) {
//     return {
//       uid: params.uid
//     }
//   }
// });

export const getStaticProps = async ({params}) => {
    const client = Client();
    var pageProps = (await client.getByUID("page", params.uid) || {});
    //pageProps.uid = params.uid;
    //pageProps.slices=pageProps.data.slices;
    return {
        props: pageProps
    }
}

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'page',
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid
      }
    }
  }
});

export default Page;

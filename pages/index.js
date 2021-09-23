import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import Prismic from "@prismicio/client";


import resolver from "../sm-resolver.js";
import Layout from "./../components/Layout";

const Home = (props) => {
  console.log(props)
  return (
    <Layout menu={props.menu}>
      {/* The getByUID query below puts the slices in the data property instead of the parent property, so data is supplied */}
       <SliceZone {...props.data} resolver={resolver} />
    </Layout>
  );
}

// Fetch content from prismic
// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   type: 'home-page',
//   queryType: 'single',
//   apiParams: {
//     uid: 'home'
//   }
// });


export const getStaticProps = async ({params}) => {
    const client = Client();
    // Query to get all documents of type 'page' from Prismic.
    var pages = (await client.query(Prismic.Predicates.at('document.type', 'page')) || {});

    // Gets the homepage document from Prismic
    var pageProps = (await client.getByUID("home-page", "homepage")) || {};
    
    // Find the correct slice and give it the pages property with the pages queried above. 
    var bannerIndex = pageProps.data.slices.findIndex((slice) => slice.slice_type === "banner_slice");
    if (bannerIndex !== -1) pageProps.data.slices[bannerIndex].pages = pages.results;
    return {
        props: pageProps
    }
}

export default Home;

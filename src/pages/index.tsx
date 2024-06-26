import HomeTemplate from "../templates/Home";
import client from "../graphql/client";
import { GET_PLACES } from "../graphql/queries";
import { GetPlacesQuery } from "../graphql/generate/graphql";
import { MapProps } from "../components/Map/types";

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />;
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    revalidate: 5,
    props: { places },
  };
};

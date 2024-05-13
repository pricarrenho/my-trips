import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { Header } from "../../components/Header";
import { MapProps } from "../../components/Map/types";

const Map = dynamic(() => import("../../components/Map"), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips - Pri Carrenho"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips.pricarrenho.com.br"
        openGraph={{
          url: "https://my-trips.pricarrenho.com.br",
          title: "My Trips",
          description:
            "A simple project to show in a map the places that I went and show more informations and photos when clicked.",
          images: [
            {
              url: "https://my-trips.pricarrenho.com.br/img/cover.png",
              width: 1280,
              height: 720,
              alt: "My Trips",
            },
          ],
          site_name: "My Trips",
        }}
      />

      <Header />

      <Map places={places} />
    </>
  );
}

import LinkWrapper from "../../components/LinkWrapper";

import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import * as S from "./styles";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Container } from "../../components/Container";

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
      text: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          "A simple project to show in a map the places that I went and show more informations and photos when clicked."
        }
        canonical="https://mytrips.com"
        openGraph={{
          url: "https://mytrips.com",
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            "A simple project to show in a map the places that I went and show more informations and photos when clicked.",
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <Container>
        <S.Wrapper>
          <S.Content>
            <S.Heading>{place.name}</S.Heading>

            <S.Body
              dangerouslySetInnerHTML={{
                __html: place.description?.html || "",
              }}
            />
          </S.Content>

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <S.Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
              />
            ))}
          </S.Gallery>
        </S.Wrapper>
      </Container>
    </>
  );
}

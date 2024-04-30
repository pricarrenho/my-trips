import { useRouter } from "next/router";
import { PlacesTemplateProps } from "./types";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import * as S from "./styles";

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <Container>
        <S.Content>
          <Header />

          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{
              __html: place.description?.html || "",
            }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <S.Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
              />
            ))}
          </S.Gallery>
        </S.Content>
      </Container>
    </>
  );
}

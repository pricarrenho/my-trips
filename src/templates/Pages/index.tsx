import { PageTemplateProps } from "./types";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import * as S from "./styles";

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Container>
    <Header />

    <S.Content>
      <S.ContentContainer>
        <S.Heading>{heading}</S.Heading>

        <S.Body dangerouslySetInnerHTML={{ __html: body }} />
      </S.ContentContainer>
    </S.Content>
  </Container>
);

export default PageTemplate;

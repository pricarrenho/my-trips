import { PageTemplateProps } from "./types";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import * as S from "./styles";

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Container>
    <S.Content>
      <Header />

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  </Container>
);

export default PageTemplate;

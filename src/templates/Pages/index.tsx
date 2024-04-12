import LinkWrapper from "../../components/LinkWrapper";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import * as S from "./styles";
import { Container } from "../../components/Container";

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Container>
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  </Container>
);

export default PageTemplate;

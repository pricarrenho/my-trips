import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import client from "../graphql/client";
import { GetPageBySlugQuery, PagesQuery } from "../graphql/generate/graphql";
import { GET_PAGE_BY_SLUG, PAGES } from "../graphql/queries";
import PageTemplate, { PageTemplateProps } from "../templates/Pages";

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PageTemplate heading={heading} body={body} />;
}

export async function getStaticPaths() {
  const { pages } = await client.request<PagesQuery>(PAGES, { first: 3 });

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  if (!page) return { notFound: true };

  return {
    props: {
      heading: page.heading,
      body: page.body.html,
    },
  };
};

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-ca-central-1.hygraph.com/v2/clcjhsy2u0eus01t9hu643k6x/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generate/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

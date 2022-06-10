import { allDocs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import "prismjs/themes/prism-tomorrow.css";

import Image from "next/image";

const MDXcomponents = {
  // Pass Custom Components here (for use in markdown files)
  Image,
};

export default function PostPage({ doc }) {
  const MDXComponent = useMDXComponent(doc.body.code);
  return (
    <>
      <article>
        <div>
          <h1>{doc.title}</h1>
        </div>
        <div className="entry">
          <MDXComponent components={MDXcomponents} />
        </div>
      </article>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allDocs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const doc = allDocs.find((p) => p.slug === params.slug);
  return {
    props: {
      doc,
    },
  };
};

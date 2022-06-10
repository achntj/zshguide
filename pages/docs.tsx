import Link from "next/link";
import { allDocs } from "contentlayer/generated";

export default function Docs({ docs }) {
  return (
    <>
      <div>
        <h1>Docs</h1>
        {docs.map(({ title, slug }, index) => (
          <Link passHref key={index} href={`/docs/${slug}`}>
            <div
              className="
                    group
                    rounded
                    p-2
                    font-medium
                    transition
                    ease-in-out
                    mb-4
                    hover:cursor-pointer
                    hover:shadow-md
                    dark:hover:shadow-none"
            >
              <p className="m-0">
                <a>
                  <b>{title}</b>
                </a>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const docs = allDocs;
  return {
    props: {
      docs,
    },
  };
};

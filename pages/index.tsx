import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div>
      <h2>The zsh guide, but cleaner.</h2>
      <p>
        All written text under the documentation belongs to the `Zsh Development
        Group`. All rights are for Peter Stephenson and the original content can
        be found{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="http://zsh.sourceforge.net/Guide/zshguide.html"
        >
          here.
        </a>
      </p>
      <p>
        The aim of this project is to organise the zshguide through
        collaboration. Please consider contributing to this project &mdash;{" "}
        <a
          href="https://github.com/achintyajha/zshguide"
          rel="noreferrer"
          target="_blank"
        >
          Github Repo
        </a>
        .
      </p>
    </div>
  );
};

export default Home;

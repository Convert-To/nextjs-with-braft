import type { NextPage } from "next";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

const Home: NextPage = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default Home;

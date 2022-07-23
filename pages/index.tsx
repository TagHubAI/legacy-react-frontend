import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-screen flex justify-center">
      <h1 className="text-3xl font-bold self-center ">
        You&apos;re home.{" "}
        <Link href="app">
          <a className="underline">Go to app.</a>
        </Link>
      </h1>
    </div>
  );
};

export default Home;

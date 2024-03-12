import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next JS App Homepage</h1>
      <Link href={"/characters"}>
        Click here to see a List of Rick & Morty Characters
      </Link>
    </main>
  );
}

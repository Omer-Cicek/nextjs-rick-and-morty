import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const CharacterDetailsPage = async ({ params }: Props) => {
  const { id } = params;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  const character = data;

  if (!response.ok) {
    return <p>Something went wrong 😭</p>;
  }
  return (
    <main>
      <Link href={"/"}>HOME</Link>
      <h1>Details about a character</h1>
      <h3>{character.name}</h3>
      {/* REVIEW */}
      {/* <p>{character.status}</p>
      <p>{character.origin}</p> */}
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
    </main>
  );
};

export default CharacterDetailsPage;

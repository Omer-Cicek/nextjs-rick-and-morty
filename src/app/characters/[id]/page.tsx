import RouterBackBtn from "@/app/components/RouterBackBtn";
import Image from "next/image";
import Link from "next/link";
import data from "../../data.json";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const CharacterDetailsPage = async ({ params }: Props) => {
  const { id } = params;
  // const response = await fetch(
  //   `https://rickandmortyapi.com/api/character/${id}`
  // );
  // const data = await response.json();
  // const character = data;
  const character = data.filter(el => +id === el.id)[0];
  console.log(character, "cjarasdas");

  // if (!response.ok) {
  //   return <p>Something went wrong 😭</p>;
  // }
  return (
    <main>
      <Link href={"/"}>HOME</Link>
      <h1>Details about {character.name}</h1>
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin.name}</p>
      <RouterBackBtn />
    </main>
  );
};

export default CharacterDetailsPage;

// SERVER COMPONENT, FETCH COMES HERE

import Link from "next/link";
import { Suspense } from "react";

interface Character {
  id: number;
  name: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

const CharactersPage = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const characters: Character[] = data.results;

  return (
    <>
      <Link href={"/"}>HOME</Link>
      <h1>Rick & Morty Characters</h1>
      <p>Click a name to checkout details about the character</p>
      <Suspense fallback={<p>Characters are loading</p>}>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <Link href={`/characters/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </>
  );
};

export default CharactersPage;

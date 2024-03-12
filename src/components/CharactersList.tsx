import Link from "next/link";
import React from "react";

const CharactersList = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  const characters = data.results;

  console.log(characters);
  return (
    <main>
      <ul>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <Link href={`/characters/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      </ul>
    </main>
  );
};

export default CharactersList;

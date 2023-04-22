import React from "react";
import "./searchResults.css";

function SearchResults({ mockArtists }) {
  const listItems = mockArtists.map((data) => (
    <li key={data.id}>
      Artist: {data.artist}, with the song "{data.songTitle}", from the album "
      {data.album}"
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default SearchResults;

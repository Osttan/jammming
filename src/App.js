import logo from "./logo.svg";
import SearchResults from "./components/SearchResults/SearchResults";
import "./App.css";

function App() {
  const mockArtists = [
    {
      id: 0,
      artist: "Deep Purple",
      songTitle: "Space Truckin'",
      album: "Machine Head",
    },
    {
      id: 1,
      artist: "Scorpions",
      songTitle: "Big City Nights",
      album: "Love at First Sting",
    },
    {
      id: 2,
      artist: "Kiss",
      songTitle: "I Love It Loud",
      album: "Creatures of the Night",
    },
  ];

  const mockPlayList = [
    {
      playlistName: "Playlist One",
      playlistTracks: [mockArtists[0], mockArtists[1], mockArtists[2]],
    },
  ];

  return <SearchResults mockArtists={mockArtists} />;
}

export default App;

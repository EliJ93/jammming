
import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
function App () {
  const [searchResults, setSearchResults] = useState([{
    name: "example track name 1",
    artist: "example track artist 1",
    album: "example track album 1",
    id: 1
  }, { 
    name: "example track name 2",
    artist: "example track artist 2",
    album: "example track album 2",
    id: 2
  } ]);
  const [playlistName, setPlaylistName] = useState("Example Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([{
    name: "example track name 1",
    artist: "example track artist 1",
    album: "example track album 1",
    id: 1
  }, { 
    name: "example track name 2",
    artist: "example track artist 2",
    album: "example track album 2",
    id: 2
  }]);

    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles["App-playlist"]}>
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults userSearchResults={searchResults}/>
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
          </div>
        </div>
      </div>
        );
}

export default App;

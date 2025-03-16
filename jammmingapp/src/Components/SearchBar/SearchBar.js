/*import React from "react";

function SearchBar() {
    return (
        <>
        <form>
        <label for="songName">Song Search:</label>
        <input type="text" id="songName"></input>
        <input type="submit" value="Search"></input>
        </form>
        </>
        
    )
}
export default SearchBar;*/
import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar () {
    return (
        <div className={styles.SearchBar}>
        <input
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className="SearchButton" >
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;
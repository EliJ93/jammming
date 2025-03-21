/*import React from "react";

function Track(props) {
    const track = { 
        name: props.name,
        artist: props.artist,
        album: props.album,
        id: props.id
    }
}
export default Track;*/
import React from "react";
import styles from "./Track.module.css";
function Track (props) {
  function renderAction() {
    return <button className="Track-action">{props.isRemoval ? "-" : "+"}</button>
  }
    return (
      <div className={styles.Track}>
        <div className={styles["Track-information"]}>
          {/* <h3><!-- track name will go here --></h3> */}
          <h3>{props.track.name}</h3>
          {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
          <p>{props.track.artist} | {props.track.album}</p>
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );
}

export default Track;
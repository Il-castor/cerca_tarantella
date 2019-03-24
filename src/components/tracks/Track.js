import React from 'react';
import { Link } from 'react-router-dom';

const Track = props => {
  const { track } = props;
//stampa le card delle prime 10 canzoni che trova, in ordine di somiglianza con il nome della canzone ed album
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Traccia
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> Guarda Testo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;

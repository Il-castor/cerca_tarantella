import React from 'react';
import spinner from './spinner.gif';

//codice per il caricatore nella pagina che visualizza il testo della canzone

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};

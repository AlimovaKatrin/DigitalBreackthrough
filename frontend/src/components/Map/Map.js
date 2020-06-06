import React from 'react';

import Bar from '../Activities/Bar/Bar';
import Dance from '../Activities/Dance/Dance';

import styles from './map-style.css'

function Map() {
  return (
    <div class="grid-container" style={{ styles }}>
      <Dance></Dance>
      <Bar></Bar>
    </div>
  );
}

export default Map;

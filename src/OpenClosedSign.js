import React from 'react';

export default function OpenClosedSign({ zooIsOpen }) {
  return (
    <div className={zooIsOpen ? 'open' : 'closed'}>
      {
        zooIsOpen
          ? <h3>Welcome to the zoo</h3>
          : <h3>Sorry the zoo is closed for the day!</h3>
      }
    </div>
  );
}

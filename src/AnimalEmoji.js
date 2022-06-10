import React from 'react';

export default function AnimalEmoji({ animal }) {
  return (
    <div>
      {animal === 'macaw' && '🦜'}
      {animal === 'sloth' && '🦥'}
      {animal === 'coati' && '🦝'}
      {animal === 'toucans' && <img src='./download.jpg'/>}
      {animal === 'crocodiles' && '🐊'}
    </div>
  );
}

import React from 'react';
import EmojiCard from './EmojiCard';
import emojipedia from '../emojipedia';

function createEmojiCard(detail) {
  return (
    <EmojiCard
      key={detail.id}
      emoji={detail.emoji}
      name={detail.name}
      meaning={detail.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createEmojiCard)}
      </dl>
    </div>
  );
}

export default App;

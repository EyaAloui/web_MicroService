import React from 'react';
import Publication from './Publication';

const PublicationList = () => {
  const publications = [
    { id: 1, title: 'First Post', content: 'Hello everyone!' },
    { id: 2, title: 'Second Post', content: 'This is another post.' },
  ];

  return (
    <div>
      {publications.map(pub => (
        <Publication key={pub.id} title={pub.title} content={pub.content} />
      ))}
    </div>
  );
};

export default PublicationList;

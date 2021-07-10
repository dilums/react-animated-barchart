import React from 'react';

export default function FollowIcons() {
  return (
    <div
      className="fixed flex items-center space-x-2"
      style={{ right: '16px', bottom: '16px' }}
    >
      <div className="p-2">
        <a
          className="icon-twitter follow-icon flex items-center justify-center h-12 w-12 rounded-full text-xl shadow-xl"
          href="https://twitter.com/DilumSanjaya"
        />
      </div>
      <div className="p-2">
        <a
          className="icon-github follow-icon flex items-center justify-center h-12 w-12 rounded-full text-xl shadow-xl"
          href="https://github.com/dilums"
        />
      </div>
      <div className="p-2">
        <a
          className="icon-codepen follow-icon flex items-center justify-center h-12 w-12 rounded-full text-xl shadow-xl"
          href="https://codepen.io/dilums"
        />
      </div>
    </div>
  );
}

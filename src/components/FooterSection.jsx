import React from 'react';

const year = new Date().getFullYear();
function FooterSection() {
  return (
    <footer>
      <p>Copyright @ {year}</p>
    </footer>
  );
}

export default FooterSection;

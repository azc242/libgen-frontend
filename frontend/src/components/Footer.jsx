import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}. This web app is for educational purposes only and I do not condone or advocate the use of this app.</p>
      <p>This was made purely for practicing React.js and Node.js</p>
    </footer>
  );
}

export default Footer;

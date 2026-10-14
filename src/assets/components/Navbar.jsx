import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="container">
      <img src="/logo.png" className="logo" alt="Logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">PAGES</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

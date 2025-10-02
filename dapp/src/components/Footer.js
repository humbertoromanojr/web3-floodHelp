export default function Footer() {
  return (
    <footer className="fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-3  border-top border-dark text-bg-dark p-3">
      <p className="col-4 mb-0 text-light">&copy; 2025 FloodHelp</p>
      <ul className="nav col-4 justify-content-end">
        <li>
          <a href="/" className="nav-link text-light px-2">
            Help-me
          </a>
        </li>
        <li>
          <a href="/create" className="nav-link text-light px-4">
            Create
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link text-light px-2">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
}

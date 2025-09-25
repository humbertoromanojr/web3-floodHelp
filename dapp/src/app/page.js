export default function Home() {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <a
              href="/"
              className="justify-content-start"
              style={{ textDecoration: "none" }}
            >
              <h1 className="fw-bold text-light">FloodHelp</h1>
            </a>
            <div className="col-9 text-end">
              <button type="button" className="btn btn-outline-light me-2">
                <img
                  src="/logo-metamask.png"
                  alt="logo metamask"
                  width="24"
                  className="me-3"
                />
                Log In
              </button>
              <a href="/create" className="btn btn-warning">
                Help me, please
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row ps-5">
          <p>Ajude as vítimas de enchentes e demais desastres naturais.</p>
        </div>
        <div className="p-4 mx-5"></div>
      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 m-5 border-top border-dark">
        <p className="col-4 mb-0 text-light">&copy; 2025 FloodHelp</p>
      </footer>
    </>
  );
}

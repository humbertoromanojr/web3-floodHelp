"use client";

import { doLogin } from "@/services/Web3Service";

export default function Header() {
  function handleLogin() {
    doLogin("hi");
  }

  return (
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
                onClick={handleLogin}
              />
              Login
            </button>
            <a href="/create" className="btn btn-warning">
              Help me, please
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

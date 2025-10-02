"use client";

import { useState, useEffect } from "react";

import { doLogin } from "@/services/Web3Service";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";

export default function Header() {
  const [wallet, setWallet] = useState("");
  function handleLogin() {
    doLogin()
      .then((wallet) => setWallet(wallet))
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  }

  useEffect(() => {
    setWallet(localStorage.getItem("addressWallet") || "");
  }, []);

  function handleLogout() {
    localStorage.removeItem("addressWallet");
    window.location.reload();
    setWallet("");
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
            {wallet ? (
              <>
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  onClick={handleLogout}
                >
                  <img
                    src={generateAvatarURL(wallet)}
                    alt="logout"
                    width="24"
                    height="24"
                    className="rounded-circle me-3"
                  />
                  {"0x..." + wallet.substring(37)}
                </button>

                <a href="/create" className="btn btn-warning">
                  Help me, please
                </a>
              </>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

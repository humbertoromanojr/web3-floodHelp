"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Create() {
  const [request, setRequest] = useState({
    title: "",
    description: "",
    contact: "",
    amount: 0,
  });

  const backgroundImageStyle = {
    backgroundImage: "url(/enchente-rs.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    color: "white",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };

  function onInputChange(e) {
    setRequest((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleSave() {
    alert("Starting the request saving process...please wait...");

    openRequest(request)
      .then((result) => {
        alert(
          "Request successfully created. It will be available on the home page in a few minutes!"
        );
        window.location.href = "/";
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  }

  return (
    <div
      style={backgroundImageStyle}
      className="container d-block background-color='#0f1221' align-items-center justify-content-center mx-lg-auto"
    >
      <Header />
      <div className="container">
        <div className="ps-5">
          <div className="row my-3">
            <p className="lead text-light">
              Please fill in all the fields below to tell us what you need.
            </p>
            <div className="col-11">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  maxLength={150}
                  value={request.title}
                  onChange={onInputChange}
                />
                <label htmlFor="title">Summary of what you need:</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  type="text"
                  id="description"
                  className="form-control"
                  style={{ height: 100 }}
                  value={request.description}
                  onChange={onInputChange}
                />
                <label htmlFor="description">
                  Describe in detail what you need, and where you are (for
                  in-person deliveries):
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="contact"
                  className="form-control"
                  maxLength={150}
                  value={request.contact}
                  onChange={onInputChange}
                />
                <label htmlFor="contact">Contact by (phone or email):</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  id="goal"
                  className="form-control"
                  value={request.goal}
                  onChange={onInputChange}
                />
                <label htmlFor="goal">
                  Metamask in BNB (leave blank if you do not wish to receive
                  donations in crypto):
                </label>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-2">
              <a href="/" className="btn btn-primary p-3 col-12">
                Back
              </a>
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-warning p-3 col-12"
                onClick={handleSave}
              >
                Send request
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

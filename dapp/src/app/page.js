"use client";

import { useEffect, useState } from "react";
import * as dotenv from "dotenv";
//dotenv.config();
console.log("dotenv  =>", process.env);

import { getOpenRequests } from "@/services/Web3Service";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Request from "@/components/Request";

export default function Home() {
  const [lastId, setLastId] = useState(0);
  const [requests, setRequests] = useState([]);

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

  useEffect(() => {
    loadRequests(lastId);
  }, [lastId]);

  async function loadRequests() {
    try {
      const result = await getOpenRequests(lastId);

      if (lastId === 0) {
        setRequests(result);
      } else {
        requests.push(...result);
        setRequests(requests);
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  function loadMoreRequests() {
    setLastId(Number(requests[requests.length - 1].id));
  }

  return (
    <div
      style={backgroundImageStyle}
      className="container d-block background-color='#0f1221' align-items-center justify-content-center mx-lg-auto"
    >
      <Header />
      <div className="container">
        <div className="row p-5 my-3 bg-light opacity-75">
          <p className="lead text-dark text-center fw-bold">
            Help victims of floods and other natural disasters.
          </p>
        </div>
        <div className="p-4 mx-5">
          <div className="list-group">
            {requests && requests.length ? (
              requests.map((rq) => <Request key={rq.id} data={rq} />)
            ) : (
              <div className="list-group-item p-5">
                <p>
                  Connect your Metamask wallet using the ‘Login’ button to help
                  or ask for help.
                </p>
              </div>
            )}
          </div>
          {requests && requests.length && requests.length % 10 === 0 ? (
            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={loadMoreRequests}
                className="btn btn-outline-dark"
              >
                More...
              </button>
            </div>
          ) : null}
        </div>
        <Footer />
      </div>
    </div>
  );
}

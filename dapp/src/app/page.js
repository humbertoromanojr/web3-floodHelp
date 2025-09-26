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

  useEffect(() => {
    loadRequests(0);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row ps-5 my-3">
          <p className="lead text-light">
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
        </div>
        <Footer />
      </div>
    </>
  );
}

import Web3 from "web3";
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
export default function Request({ data }) {
  function handleClose() {
    if (!confirm("Are you sure you want to close this request?")) return;

    closeRequest(data.id)
      .then((result) => {
        alert("Request successfully closed!");
        window.location.reload = "/";
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  }

  function handleHelp() {
    const donationInBnb = prompt(
      "Please enter the amount of BNB you want to donate:"
    );

    donate(data.id, donationInBnb)
      .then((result) => {
        alert("Donation successfully sent!");
        window.location.reload = "/";
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  }

  return (
    <>
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
        <img
          src={generateAvatarURL(data.author)}
          alt="Wallet"
          width="32"
          height="32"
          className="rounded-circle flex-shrink-0"
        />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div className="w-100">
            <div className="row">
              <div className="col-10">
                <h6 className="mb-0">
                  {data.title}&nbsp;&nbsp;Contact
                  {data.contact}
                </h6>
              </div>
              <div className="col-2">
                <div className="text-end">
                  {localStorage.getItem("addressWallet") ===
                  data.author.toLowerCase() ? (
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={handleHelp}
                    >
                      &#36; Help-me
                    </button>
                  )}
                </div>
              </div>
            </div>
            <p className="mb-0 opacity-75 me-5">{data.description}</p>
            <div className="row">
              <div className="col">
                <span className="me-1 opacity-75">Meta:</span>
                <span className="opacity-50">
                  {data.balance
                    ? `BNB ${Web3.utils.fromWei(
                        data.balance,
                        "ether"
                      )} obtained from ${Web3.utils.fromWei(
                        data.goal,
                        "ether"
                      )}`
                    : `BNB ${Web3.utils.fromWei(data.goal, "ether")}`}
                </span>
              </div>
              <div className="col text-end">
                <small className="opacity-50 text-nowrap">
                  Created:{" "}
                  {formatDistance(
                    new Date(Number(data.timestamp) * 1000),
                    new Date(),
                    {
                      addSuffix: true,
                      locale: ptBR,
                    }
                  )}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
export default function Request() {
  return (
    <>
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
        <img
          src={generateAvatarURL}
          alt="Wallet"
          width="32"
          height="32"
          className="rounded-circle flex-shrink-0"
        />
      </div>
    </>
  );
}

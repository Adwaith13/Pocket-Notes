import React from "react";
import "./../CSS/Notes.css";

export default function Notes() {
  return (
    <>
      <div className="notes-page">
        <div className="add-notes-group">
          <h1 className="heading">Pocket Notes</h1>
          <button className="add-btn">
            <img
              src="./icons/add.svg"
              alt="add-icon"
              className="add-icon"
            ></img>
            Create Notes Group
          </button>
          <div className="groups-display"></div>
        </div>
        <div className="initial-display">
          <img
            src="./icons/logo.png"
            alt="display-icon"
            className="display-logo"
          ></img>
          <h1 className="display-heading">Pocket Notes</h1>
          <p className="display-text">
            Send and receive messages without keeping your phone online.
            <br></br>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
          <footer className="encrypt-text">
            <img src="./icons/lock.svg" alt="encryption-logo" className="lock-icon"></img>
            <footer className="footer">end-to-end encrypted</footer>
          </footer>
        </div>
      </div>
    </>
  );
}

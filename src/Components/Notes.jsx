import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./../CSS/Notes.css";
import "./../CSS/Popup.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "35%",
    height: "31%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Notes() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [colors] = useState([
    {
      id: 1,
      color: "#B38BFA",
    },
    {
      id: 2,
      color: "#FF79F2",
    },
    {
      id: 3,
      color: "#43E6FC",
    },
    {
      id: 4,
      color: "#F19576",
    },
    {
      id: 5,
      color: "#0047FF",
    },
    {
      id: 6,
      color: "#6691FF",
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [inputData, setInputData] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const addTextToDisplay = (e) => {
    e.preventDefault();
    const groups = { text: inputText, color: selectedColor,notes:[] };
    const updatedData = [...inputData, groups];
    setInputData(updatedData);
    localStorage.setItem("groups", JSON.stringify(updatedData));
    setInputText("");
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("groups"));
    if (storedData) {
      setInputData(storedData);
    }
  }, []);

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const handleSelectedGroup = (index) => {
    setSelectedGroup(index);
  };

  return (
    <>
      <div className="notes-page">
        <div className="add-notes-group">
          <h1 className="heading">Pocket Notes</h1>
          <button className="add-btn" onClick={openModal}>
            <img
              src="./icons/add.svg"
              alt="add-icon"
              className="add-icon"
            ></img>
            Create Notes Group
          </button>

          <div className="popup-window">
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
              <form>
                <h1 className="popup-heading">Create New Notes Group</h1>
                <span className="group-name-text">Group Name</span>
                <input
                  placeholder="Enter your group name..."
                  className="group-name-input"
                  onChange={(e) => setInputText(e.target.value)}
                  value={inputText}
                ></input>
                <div className="color-section">
                  <span className="choose-color-text">Choose Color</span>
                  <div className="choose-colors">
                    {colors.map((color) => (
                      <div
                        className={`colors ${
                          selectedColor === color ? "selected" : ""
                        }`}
                        key={color.id}
                        style={{ backgroundColor: color.color }}
                        onClick={() => handleSelectedColor(color)}
                      ></div>
                    ))}
                  </div>
                </div>
                <button className="create-btn" onClick={addTextToDisplay}>
                  Create
                </button>
              </form>
            </Modal>
          </div>

          <div className="groups-display">
            {inputData.map((input, index) => (
              <div key={index} className="group-container" onClick={() => handleSelectedGroup(index)}>
                <div className="profile" style={{ backgroundColor: input.color.color }}>
                  {input.text.replace().slice(0, 2).toUpperCase()}
                </div>
                <div className="group-text">{input.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="initial-display">
          {selectedGroup !== null && (
          <div className="notes-taking-section">
          <div className="notes-section">
            <div className="profile-section">
            <div className="notes-profile" style={{ backgroundColor: inputData[selectedGroup].color.color }}>
              {inputData[selectedGroup].text.replace().slice(0,2).toUpperCase()}
            </div>
            <h2 className="notes-group-name">{inputData[selectedGroup].text}</h2>
            </div>
            <div className="notes-display">

            </div>
          <div className="textarea">
            <textarea className="notes-input" placeholder="Enter your text here..." ></textarea>
            </div>
          </div>
          </div>
        )}

        {selectedGroup === null && (
          <div>
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
              <img
                src="./icons/lock.svg"
                alt="encryption-logo"
                className="lock-icon"
              ></img>
              <footer className="footer">end-to-end encrypted</footer>
            </footer>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

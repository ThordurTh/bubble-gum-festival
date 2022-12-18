import { useState, useEffect, useRef } from "react";
import Anchor from "../Anchor";

function refreshPage() {
  window.location.reload();
}

function TimerComp({ milliseconds }) {
  const [showModal, setShowModal] = useState(false);
  // const [countdown, setCountdown] = useState(
  //   Math.abs(new Date("7/4/2023") - new Date()) / 1000
  // );
  const [countdown, setCountdown] = useState(milliseconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      setShowModal(true);
    }
  }, [countdown]);

  if (showModal) {
    return (
      showModal && (
        <div className="modal modal-show">
          <div className="modal-content">
            <h3>Session Timed Out!</h3>
            <ul>
              <li>Your reservation has expired!</li>
              <li>Please try again later!</li>
            </ul>
            <div className="back-front">
              <Anchor href="/">TRY AGAIN</Anchor>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default TimerComp;

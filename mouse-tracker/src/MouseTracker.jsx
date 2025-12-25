import { useEffect } from "react";

function MouseTracker() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log("X:", e.clientX, "Y:", e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Tracker</h2>
      <p>Move the mouse and check the console</p>
    </div>
  );
}

export default MouseTracker;
